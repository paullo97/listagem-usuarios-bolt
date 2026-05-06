import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectLoading, selectSaving, selectEditing } from '../../core/store/selectors/users.selectors';
import { saveNewUser, saveNewUserSuccess, initEditUser, initEditUserGetSuccess, saveEditUser, saveEditUserSuccess } from '../../core/store/actions/users.actions';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { cpfCnpjValidator } from '../../core/validators/cpf-cnpj.validator';
import { User, DocumentType } from '../../core/models/user.model';

export { DocumentType } from '../../core/models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './form-user.html',
  styleUrl: './form-user.scss',
})
export class UserForm implements OnInit, OnDestroy {

  form!: FormGroup;
  isEditMode = false;
  isLoading$!: Observable<boolean>;
  editingUser$!: Observable<User | null>;
  DocumentType = DocumentType; 

  private userId: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store,
    private actions$: Actions
  ) {
    this.editingUser$ = this.store.select(selectEditing);
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectSaving);
    this.buildForm();
    this.checkEditMode();
    this.setupSuccessListener();
    this.setupEditingListener();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get docType(): AbstractControl {
    return this.form.get('docType')!;
  }

  setDocType(type: DocumentType): void {
    setTimeout(() => {
      this.docType.setValue(type);
    }, 0);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = this.form.getRawValue();
    
    if (this.isEditMode && this.userId) {
      const updatedUser = {
        ...formData,
        id: this.userId.toString(),
        updatedAt: new Date()
      };
      this.store.dispatch(saveEditUser({ user: updatedUser }));
    } else {
      const newUser = {
        ...formData,
        createdAt: new Date()
      };
      this.store.dispatch(saveNewUser({ user: newUser }));
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.phoneValidator()]],
      docType: [DocumentType.CPF],
      document: [
        '',
        [Validators.required, cpfCnpjValidator(() => this.docType.value)],
      ],
      createdAt: [{ value: null, disabled: true }],
      updatedAt: [{ value: null, disabled: true }],
    });

    this.docType.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.f['document'].reset('');
        this.f['document'].updateValueAndValidity();
      });
  }

  private checkEditMode(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userId = id;
      this.loadUser(this.userId);
    }
  }

  private loadUser(id: string): void {
    this.store.dispatch(initEditUser({ id }));
  }

  private setupEditingListener(): void {
    this.editingUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        this.patchForm(user);
      }
    });
  }

  private patchForm(user: any): void {
    setTimeout(() => {
      this.form.patchValue({
        docType: user.docType ?? DocumentType.CPF,
        name: user.name,
        email: user.email,
        phone: this.formatPhone(user.phone),
        document: user.document,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    }, 0);
  }

  private formatPhone(phone: string): string {
    if (!phone) return '';
    
    const numbers = phone.replace(/\D/g, '');
    
    if (numbers.length < 10) return phone;
    
    if (numbers.length === 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (numbers.length === 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    
    return phone;
  }
  
  private phoneValidator() {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return null;
      
      const phoneNumbers = value.replace(/\D/g, '');
      
      if (phoneNumbers.length === 10 || phoneNumbers.length === 11) {
        return null;
      }
      
      return { invalidPhone: true };
    };
  }

  private setupSuccessListener(): void {
    this.actions$.pipe(
      ofType(saveNewUserSuccess, saveEditUserSuccess),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.snackBar.open(
        this.isEditMode ? 'Usuário atualizado com sucesso!' : 'Usuário cadastrado com sucesso!',
        'Fechar',
        { duration: 3000, panelClass: 'snack-success' }
      );
      this.router.navigate(['/']);
    });
  }
}