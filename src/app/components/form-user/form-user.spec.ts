import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';
import { Observable, of } from 'rxjs';

import { UserForm } from './form-user';
import { User, DocumentType } from '../../core/models/user.model';
import * as UsersActions from '../../core/store/actions/users.actions';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;
  let store: Store;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    phone: '12982592596',
    docType: DocumentType.CPF,
    document: '46968382857',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  };

  beforeEach(async () => {
    const storeMock = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of(false))
    };

    const routerMock = {
      navigate: vi.fn()
    };

    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: vi.fn().mockReturnValue(null)
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        UserForm
      ],
      providers: [
        provideStore({}),
        provideEffects([]),
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with correct fields', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('email')).toBeTruthy();
    expect(component.form.get('phone')).toBeTruthy();
    expect(component.form.get('docType')).toBeTruthy();
    expect(component.form.get('document')).toBeTruthy();
  });

  it('should have DocumentType enum exposed', () => {
    expect(component.DocumentType).toBe(DocumentType);
  });

  it('should be in create mode by default', () => {
    expect(component.isEditMode).toBe(false);
  });

  it('should validate required fields', () => {
    const form = component.form;
    
    // Initially invalid
    expect(form.valid).toBe(false);
    
    // Fill required fields
    form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      phone: '12982592596',
      document: '46968382857'
    });
    
    expect(form.valid).toBe(true);
  });

  it('should validate email format', () => {
    const emailControl = component.form.get('email');
    
    emailControl?.setValue('invalid-email');
    expect(emailControl?.invalid).toBe(true);
    expect(emailControl?.hasError('email')).toBe(true);
    
    emailControl?.setValue('valid@example.com');
    expect(emailControl?.valid).toBe(true);
  });

  it('should validate name length', () => {
    const nameControl = component.form.get('name');
    
    nameControl?.setValue('ab');
    expect(nameControl?.invalid).toBe(true);
    expect(nameControl?.hasError('minlength')).toBe(true);
    
    nameControl?.setValue('Valid Name');
    expect(nameControl?.valid).toBe(true);
  });

  
  it('should dispatch saveNewUser action on submit in create mode', () => {
    component.isEditMode = false;
    component.form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      phone: '12982592596',
      docType: DocumentType.CPF,
      document: '46968382857'
    });

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      type: '[Users] Save New User',
      user: expect.objectContaining({
        name: 'Test User',
        email: 'test@example.com'
      })
    }));
  });

  it('should dispatch saveEditUser action on submit in edit mode', () => {
    component.isEditMode = true;
    // Simular userId como string
    (component as any).userId = '1';
    component.form.patchValue({
      name: 'Updated User',
      email: 'updated@example.com',
      phone: '12982592596',
      docType: DocumentType.CPF,
      document: '46968382857'
    });

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      type: '[Users] Save Edit User',
      user: expect.objectContaining({
        id: '1',
        name: 'Updated User'
      })
    }));
  });

  it('should navigate to home on cancel', () => {
    component.onCancel();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  });
