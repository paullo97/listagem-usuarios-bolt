import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';
import { Observable, of } from 'rxjs';

import { ListUsers } from './list-users';
import { User } from '../../core/models/user.model';
import * as UsersActions from '../../core/store/actions/users.actions';

describe('ListUsers', () => {
  let component: ListUsers;
  let fixture: ComponentFixture<ListUsers>;
  let store: Store;
  let router: Router;
  let dialog: MatDialog;

  const mockUsers: User[] = [
    {
      id: '1',
      name: 'Test User 1',
      email: 'test1@example.com',
      phone: '12982592596',
      docType: 'cpf' as any,
      document: '46968382857',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z'
    },
    {
      id: '2',
      name: 'Test User 2',
      email: 'test2@example.com',
      phone: '1234567890',
      docType: 'cnpj' as any,
      document: '12345678901234',
      createdAt: '2024-01-02T00:00:00.000Z',
      updatedAt: '2024-01-02T00:00:00.000Z'
    }
  ];

  beforeEach(async () => {
    const storeMock = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of(mockUsers))
    };

    const routerMock = {
      navigate: vi.fn()
    };

    const dialogMock = {
      open: vi.fn().mockReturnValue({
        afterClosed: vi.fn().mockReturnValue({
          subscribe: vi.fn()
        })
      })
    };

    await TestBed.configureTestingModule({
      imports: [
        ListUsers
      ],
      providers: [
        provideStore({}),
        provideEffects([]),
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock },
        { provide: MatDialog, useValue: dialogMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListUsers);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct properties', () => {
    expect(component.displayedColumns).toEqual(['name', 'phone', 'document', 'date', 'actions']);
    expect(component.pageSize).toBe(3);
    expect(component.pageIndex).toBe(0);
  });

  it('should have avatar colors array', () => {
    expect(component['avatarColors']).toBeDefined();
    expect(component['avatarColors'].length).toBeGreaterThan(0);
  });

  it('should get initials from name', () => {
    const initials = component.getInitials('John Doe');
    expect(initials).toBe('JD');
  });

  it('should get initials from single name', () => {
    const initials = component.getInitials('John');
    expect(initials).toBe('J');
  });

  it('should get avatar color based on name', () => {
    const color = component.getAvatarColor('Test User');
    expect(component['avatarColors']).toContain(color);
  });

  it('should format phone with 11 digits', () => {
    const formattedPhone = component.formatPhone('12982592596');
    expect(formattedPhone).toBe('(12) 98259-2596');
  });

  it('should format phone with 10 digits', () => {
    const formattedPhone = component.formatPhone('1234567890');
    expect(formattedPhone).toBe('(12) 3456-7890');
  });

  it('should format CPF correctly', () => {
    const formattedDoc = component.formatDocument('46968382857');
    expect(formattedDoc).toBe('469.683.828-57');
  });

  it('should format CNPJ correctly', () => {
    const formattedDoc = component.formatDocument('12345678901234');
    expect(formattedDoc).toBe('12.345.678/9012-34');
  });

  it('should return original document if invalid length', () => {
    const formattedDoc = component.formatDocument('123456');
    expect(formattedDoc).toBe('123456');
  });

  it('should dispatch loadUsers on retry', () => {
    component.onRetry();
    expect(store.dispatch).toHaveBeenCalledWith(UsersActions.loadUsers());
  });

  it('should navigate to add user page', () => {
    component.onAddUser();
    expect(router.navigate).toHaveBeenCalledWith(['new']);
  });

  it('should navigate to edit user page', () => {
    const testUser = mockUsers[0];
    component.onEdit(testUser);
    expect(router.navigate).toHaveBeenCalledWith([testUser.id]);
  });

  it('should open delete dialog on delete', () => {
    const testUser = mockUsers[0];
    component.onDelete(testUser);
    
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should handle page change', () => {
    const pageEvent = {
      pageIndex: 1,
      pageSize: 5,
      length: 10
    };
    
    component.onPageChange(pageEvent);
    expect(component.pageIndex).toBe(1);
    expect(component.pageSize).toBe(5);
  });

  it('should handle empty phone formatting', () => {
    const formattedPhone = component.formatPhone('');
    expect(formattedPhone).toBe('');
  });

  it('should handle empty document formatting', () => {
    const formattedDoc = component.formatDocument('');
    expect(formattedDoc).toBe('');
  });

  it('should handle phone with less than 10 digits', () => {
    const formattedPhone = component.formatPhone('123456789');
    expect(formattedPhone).toBe('123456789');
  });
});
