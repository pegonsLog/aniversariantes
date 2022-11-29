import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Subscription } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = 'http://localhost:3000';
  auth: boolean = false;
  usersAuths: User[] = [];
  subscription: Subscription = new Subscription();
  constructor(private http: HttpClient) {
    this.getAll();
  }

  async getAll() {
    this.subscription = await this.http
      .get<User[]>(`${this.API}/users`)
      .subscribe((users: User[]) => (this.usersAuths = users));
      this.unsub();

  }

  async userAuth(record: Partial<User>) {
    console.log(record);

    for (let u of this.usersAuths) {
      if (u.user == record.user && u.password == record.password) {
        console.log(this.auth);
        return (this.auth = true);
      }
    }
    console.log(this.auth);

    return (this.auth = false);
  }

  unsub(){
    this.subscription.unsubscribe();
  }
}
