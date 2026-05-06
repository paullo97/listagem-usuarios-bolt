import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { usersReducer } from './core/store/reducers/users.reducer';
import { UsersEffects } from './core/store/effects/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      users: usersReducer,
    }),
    provideEffects([UsersEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
};
