import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule, DatePipe, AsyncPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../core/models/user.model';
import * as UsersSelectors from '../../core/store/selectors/users.selectors';
import * as UsersActions from '../../core/store/actions/users.actions';
import { loadUsers } from '../../core/store/actions/users.actions';

// Define AppState interface since index.ts was deleted
interface AppState {
  users: {
    users: User[];
    loading: boolean;
    error: any;
  };
}

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    AsyncPipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './list-users.html',
  styleUrl: './list-users.scss',
})
export class ListUsers implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'phone', 'document', 'date', 'actions'];
  users$: any;
  loading$: any;
  error$: any;
  
  dataSource!: MatTableDataSource<User>;
  pageSize = 5;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private avatarColors = [
    '#5C6BC0', '#42A5F5', '#26A69A', '#66BB6A',
    '#FFA726', '#EF5350', '#AB47BC', '#EC407A',
  ];

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.users$ = this.store.select(UsersSelectors.selectUsers);
    this.loading$ = this.store.select(UsersSelectors.selectLoading);
    this.error$ = this.store.select(UsersSelectors.selectError);
  }

  ngOnInit(): void {
    this.users$.pipe(takeUntil(this.destroy$)).subscribe((users: User[]) => {
      if (users) {
        this.dataSource = new MatTableDataSource(users);
        
        if (users.length === 0) {
          this.store.dispatch(loadUsers());
        }
        
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.dataSource && this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddUser(): void {
    this.router.navigate(['new']);
  }

  onEdit(user: User): void {
    this.router.navigate([user.id]);
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  onRetry(): void {
    this.store.dispatch(loadUsers());
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