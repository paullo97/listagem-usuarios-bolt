import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import { Store } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import * as UsersSelectors from '../selectors/users.selectors';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);
  private store = inject(Store);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => {
            return of(UsersActions.loadUsersError({ error }));
          })
        )
      )
    )
  );

  saveNewUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.saveNewUser),
      switchMap(() =>
        of(UsersActions.saveNewUserSuccess())
      )
    )
  );

  initEditUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.initEditUser),
      withLatestFrom(this.store.select(UsersSelectors.selectUsers)),
      switchMap(([{ id }, users]) => {
        console.log()
        const user = users.find(u => u.id === id.toString());
        
        if (user) {
          return of(UsersActions.initEditUserGetSuccess({ user }));
        } else {
          return of(UsersActions.initEditUserError({ error: 'User not found' }));
        }
      })
    )
  );

  saveEditUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.saveEditUser),
      switchMap(({ user }) =>
        of(UsersActions.saveEditUserSuccess())
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUser),
      switchMap(({ id }) => {
        return of(UsersActions.deleteUserSuccess({ id }));
      })
    )
  );
}