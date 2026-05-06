import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import * as UsersActions from '../actions/users.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

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
}