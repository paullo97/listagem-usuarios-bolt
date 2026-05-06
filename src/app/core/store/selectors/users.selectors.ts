import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../reducers/users.reducer';

export const selectUsersState =
  createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUsersState,
  (state) => state.error
);

export const selectSaving = createSelector(
  selectUsersState,
  (state) => state.saving
);

export const selectEditing = createSelector(
  selectUsersState,
  (state) => state.userEdit
);