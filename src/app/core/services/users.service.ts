import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, catchError, throwError } from 'rxjs';
import { UsersAdapter } from '../adapter/users.adapter'; 

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  private readonly API = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get<any[]>(this.API).pipe(
      map(users => users.map(UsersAdapter.fromApi)),
      delay(5000),
      map(users => {
        const random = Math.random();
        if (random < 0.3) {
          throw {
            message: 'Erro simulado pela roleta de erro!',
            timestamp: new Date().toISOString(),
            randomValue: random
          };
        }
        return users;
      }),
      catchError(error => throwError(() => error))
    );
  }
}