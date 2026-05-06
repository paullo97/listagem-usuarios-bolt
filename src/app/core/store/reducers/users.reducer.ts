import { createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import { User } from '../../models/user.model';
import { generateUUID } from '../../utils/uuid.util';

export interface UsersState {
  users: User[];
  loading: boolean;
  saving: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  saving: false,
  error: null,
};

export const usersReducer = createReducer(
  initialState,

  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),

  on(UsersActions.loadUsersError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(UsersActions.saveNewUser, (state, { user: newUser }) => ({
    ...state,
    saving: true,
    error: null,
    users: [
      {
        ...newUser,
        id: generateUUID(),
      },
      ...state.users,
    ],
  })),

  on(UsersActions.saveNewUserSuccess, (state) => ({
    ...state,
    saving: false,
    error: null,
  })),

  on(UsersActions.saveNewUserError, (state, { error }) => ({
    ...state,
    error,
    saving: false,
  })),
);