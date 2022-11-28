import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

   getUsers(user: Login) {
   return this.http.get<Login>(`${this.API}/users/${user.id}`).pipe(first());
  }
}
