import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

import { ConfirmDeleteDialogComponent, DialogData } from './confirm-delete-dialog.component';

describe('ConfirmDeleteDialogComponent', () => {
  let component: ConfirmDeleteDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteDialogComponent>;
  let dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>;

  const mockDialogData: DialogData = {
    userName: 'Test User',
    userEmail: 'test@example.com'
  };

  beforeEach(async () => {
    const mockDialogRef = {
      close: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        ConfirmDeleteDialogComponent
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: mockDialogRef }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name in confirmation message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const messageElement = compiled.querySelector('.confirmation-message');
    expect(messageElement?.textContent).toContain('Test User');
  });

  it('should display user email', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailElement = compiled.querySelector('.user-email');
    expect(emailElement?.textContent).toContain('test@example.com');
  });

  it('should show warning text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const warningElement = compiled.querySelector('.warning-text');
    expect(warningElement?.textContent).toContain('Esta ação não pode ser desfeita');
  });

  it('should have cancel button', () => {
    const cancelButton = fixture.debugElement.query(By.css('button[mat-button]'));
    expect(cancelButton).toBeTruthy();
    expect(cancelButton.nativeElement.textContent).toContain('Cancelar');
  });

  it('should have delete button with correct styling', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    expect(deleteButton).toBeTruthy();
    expect(deleteButton.nativeElement.textContent).toContain('Excluir');
  });

  it('should have delete icon', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    const deleteIcon = deleteButton?.query(By.css('mat-icon'));
    expect(deleteIcon).toBeTruthy();
    expect(deleteIcon?.nativeElement.textContent).toContain('delete');
  });

  it('should close dialog with false when cancel is clicked', () => {
    const cancelButton = fixture.debugElement.query(By.css('button[mat-button]'));
    cancelButton.nativeElement.click();
    
    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should close dialog with true when confirm is clicked', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.nativeElement.click();
    
    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });

  it('should have warning icon', () => {
    const warningIcon = fixture.debugElement.query(By.css('.warning-icon'));
    expect(warningIcon).toBeTruthy();
    expect(warningIcon.nativeElement.textContent).toContain('warning');
  });

  it('should have correct dialog title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement?.textContent).toContain('Confirmar Exclusão');
  });
});
