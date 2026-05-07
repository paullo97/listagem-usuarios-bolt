import { createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import { User } from '../../models/user.model';
import { generateUUID } from '../../utils/uuid.util';

export interface UsersState {
  users: User[];
  loading: boolean;
  saving: boolean;
  error: any;
  userEdit: User | null;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  saving: false,
  error: null,
  userEdit: null,
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

  on(UsersActions.initEditUser, (state) => ({
    ...state,
  })),

  on(UsersActions.initEditUserGetSuccess, (state, { user }) => ({
    ...state,
    userEdit: user,
  })),

  on(UsersActions.initEditUserError, (state, { error }) => ({
    ...state,
    error,
    userEdit: null,
  })),

  on(UsersActions.saveEditUser, (state, { user }) => ({
    ...state,
    saving: true,
    error: null,
    users: state.users.map(u => u.id === user.id ? user : u),
  })),

  on(UsersActions.saveEditUserSuccess, (state) => ({
    ...state,
    saving: false,
    error: null,
    userEdit: null,
  })),

  on(UsersActions.saveEditUserError, (state) => ({
    ...state,
    saving: false,
    error: 'Erro ao editar usuário'
  })),

  on(UsersActions.deleteUser, (state) => ({
    ...state,
    saving: true,
    error: null
  })),
  on(UsersActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    saving: false,
    users: state.users.filter(user => user.id !== id),
    error: null
  })),
  on(UsersActions.deleteUserError, (state) => ({
    ...state,
    saving: false,
    error: 'Erro ao excluir usuário',
    userEdit: null,
  })),
);