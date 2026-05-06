import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectLoading, selectSaving } from '../../core/store/selectors/users.selectors';
import { saveNewUser, saveNewUserSuccess } from '../../core/store/actions/users.actions';

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

// Expor o enum para uso no template
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
  DocumentType = DocumentType; // Expor enum para o template

  private userId: number | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectSaving);
    this.buildForm();
    this.checkEditMode();
    this.setupSuccessListener();
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

    this.store.dispatch(saveNewUser({ user: {...this.form.getRawValue(), createdAt: new Date() } }));
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  getPhoneMask(): string {
    const phoneControl = this.form?.get('phone');
    if (!phoneControl?.value) return '(00) 00000-0000'; 
    
    const phoneNumbers = phoneControl.value.replace(/\D/g, '');
    
    if (phoneNumbers.length >= 11) {
      return '(00) 00000-0000';
    } else {
      return '(00) 0000-0000';
    }
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
      this.userId = +id;
      this.loadUser(this.userId);
    }
  }

  private loadUser(id: number): void {
    // ── Mock (remova ao integrar NgRx) ───────────────────────────────────
    const mockUser = {
      id,
      name: 'Ana Carolina Silva',
      email: 'ana.silva@email.com',
      phone: '11912345678',
      docType: DocumentType.CPF,
      document: '529.982.247-25',
      createdAt: new Date('2024-01-15T10:30:00'),
      updatedAt: new Date('2024-11-20T14:22:00'),
    };
    this.patchForm(mockUser);
  }

  private patchForm(user: any): void {
    setTimeout(() => {
      this.form.patchValue({
        docType: user.docType ?? 'cpf',
        name:      user.name,
        email:     user.email,
        phone:     user.phone,
        document:  user.document,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    }, 0);
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
      ofType(saveNewUserSuccess),
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