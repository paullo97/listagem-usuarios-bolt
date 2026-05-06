import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    DatePipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatDividerModule,
    MatPaginatorModule,
  ],
  templateUrl: './list-users.html',
  styleUrl: './list-users.scss',
})
export class ListUsers implements OnInit {

  displayedColumns: string[] = ['name', 'phone', 'document', 'date', 'actions'];

  // Dados mock — substitua pelo selector do NgRx depois
  users: (Partial<User> & { phone: string, document: string, documentType: 'cpf' | 'cnpj', createdAt: string })[] = [
    { id: 1, name: 'Ana Carolina Silva',  email: 'ana.silva@email.com',    phone: '(11) 98765-4321', document: '123.456.789-00', documentType: 'cpf', updatedAt: '2024-01-16', createdAt: '2024-01-15' },
    { id: 2, name: 'Bruno Mendes',        email: 'bruno.mendes@email.com', phone: '(21) 91234-5678', document: '456.789.012-33', documentType: 'cpf', createdAt: '2024-01-20' },
    { id: 3, name: 'Camila Rocha',        email: 'camila.r@email.com',     phone: '(31) 98876-5432', document: '12.345.678/0001-99', documentType: 'cnpj', createdAt: '2024-02-01' },
    { id: 4, name: 'Diego Ferreira',      email: 'diego.f@email.com',      phone: '(41) 97654-3210', document: '789.012.345-66', documentType: 'cpf', createdAt: '2024-02-10' },
    { id: 5, name: 'Elisa Monteiro',      email: 'elisa.m@email.com',      phone: '(51) 96543-2109', document: '98.765.432/0001-00', documentType: 'cnpj', createdAt: '2024-02-15' },
  ];

  private avatarColors = [
    '#5C6BC0', '#42A5F5', '#26A69A', '#66BB6A',
    '#FFA726', '#EF5350', '#AB47BC', '#EC407A',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Dispatch de load quando integrar NgRx:
    // this.store.dispatch(UsersActions.loadUsers());
  }

  onAddUser(): void {
    this.router.navigate(['new']);
  }

  onEdit(user: User): void {
    this.router.navigate([user.id]);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  getAvatarColor(name: string): string {
    const index = name.charCodeAt(0) % this.avatarColors.length;
    return this.avatarColors[index];
  }

}