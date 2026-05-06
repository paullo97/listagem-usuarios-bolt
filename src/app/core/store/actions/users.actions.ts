import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction(
  '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Users] Load Initial Users Success',
  props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[Users] Load Initial Users Error',
  props<{ error: any }>()
);