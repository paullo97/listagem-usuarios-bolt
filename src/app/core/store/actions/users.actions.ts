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

export const initEditUser = createAction(
  '[Users] Init Edit User',
  props<{ id: string }>()
);

export const initEditUserGetSuccess = createAction(
  '[Users] Init Edit User Get Success',
  props<{ user: User }>()
);

export const initEditUserError = createAction(
  '[Users] Init Edit User Error',
  props<{ error: any }>()
);

export const saveEditUser = createAction(
  '[Users] Save Edit User',
  props<{ user: User }>()
);

export const saveEditUserSuccess = createAction(
  '[Users] Save Edit User Success'
);

export const saveEditUserError = createAction(
  '[Users] Save Edit User Error',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ id: string }>()
);

export const deleteUserSuccess = createAction(
  '[Users] Delete User Success',
  props<{ id: string }>()
);

export const deleteUserError = createAction(
  '[Users] Delete User Error',
  props<{ error: any }>()
);