import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${this.API}/users`);
  }
}
