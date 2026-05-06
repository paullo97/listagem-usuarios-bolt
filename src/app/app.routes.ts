import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/list-users/list-users').then(m => m.ListUsers)
    },
    {
        path: 'new',
        loadComponent: () => import('./components/form-user/form-user').then(m => m.UserForm)
    },
    {
        path: ':id',
        loadComponent: () => import('./components/form-user/form-user').then(m => m.UserForm)
    }
];