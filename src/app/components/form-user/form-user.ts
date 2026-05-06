import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  isLoading = false;

  private userId: number | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    // private store: Store  ← descomente ao integrar NgRx
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.checkEditMode();
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

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      docType: ['cpf'],
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
    // ── Com NgRx ────────────────────────────────────────────────────────
    // this.store.dispatch(UsersActions.loadUser({ id }));
    // this.store.select(selectCurrentUser)
    //   .pipe(takeUntil(this.destroy$), filter(Boolean))
    //   .subscribe(user => this.patchForm(user));

    // ── Mock (remova ao integrar NgRx) ───────────────────────────────────
    const mockUser = {
      id,
      name: 'Ana Carolina Silva',
      email: 'ana.silva@email.com',
      phone: '11912345678',
      docType: 'cpf' as 'cpf' | 'cnpj',
      document: '529.982.247-25',
      createdAt: new Date('2024-01-15T10:30:00'),
      updatedAt: new Date('2024-11-20T14:22:00'),
    };
    this.patchForm(mockUser);
  }

  private patchForm(user: any): void {
    // Usa setTimeout para evitar ExpressionChangedAfterItHasBeenCheckedError
    // e garantir que os campos com máscara funcionem corretamente
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

  setDocType(type: 'cpf' | 'cnpj'): void {
    // Usa setTimeout para evitar problemas com o ciclo de detecção
    setTimeout(() => {
      this.docType.setValue(type);
    }, 0);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const payload = {
      ...this.form.getRawValue(),
      updatedAt: new Date(),
      ...(!this.isEditMode && { createdAt: new Date() }),
    };

    // ── Com NgRx ────────────────────────────────────────────────────────
    // if (this.isEditMode) {
    //   this.store.dispatch(UsersActions.updateUser({ user: { id: this.userId!, ...payload } }));
    // } else {
    //   this.store.dispatch(UsersActions.createUser({ user: payload }));
    // }

    // ── Mock (remova ao integrar NgRx) ───────────────────────────────────
    setTimeout(() => {
      this.isLoading = false;
      this.snackBar.open(
        this.isEditMode ? 'Usuário atualizado com sucesso!' : 'Usuário cadastrado com sucesso!',
        'Fechar',
        { duration: 3000, panelClass: 'snack-success' }
      );
      this.router.navigate(['/']);
    }, 1200);
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}