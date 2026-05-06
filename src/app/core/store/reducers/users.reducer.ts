import { createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import { User } from '../../models/user.model';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
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
);