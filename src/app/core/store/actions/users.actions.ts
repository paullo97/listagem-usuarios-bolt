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

export const saveNewUser = createAction(
  '[Users] Save New User',
  props<{ user: User }>()
);

export const saveNewUserSuccess = createAction(
  '[Users] Save New User Success'
);

export const saveNewUserError = createAction(
  '[Users] Save New User Error',
  props<{ error: any }>()
);

