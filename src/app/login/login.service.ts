import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private users: Login[] = [
    {
      user: 'pegons',
      password: '123',
    },
  ];

  constructor() {}

  getUsers(user: string, password: string) {
    for (let u of this.users) {
      if (u.user == user && u.password == password) {
        return u;
      }
      return null;
    }
  }
}
