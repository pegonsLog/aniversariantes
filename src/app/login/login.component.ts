import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Login } from '../model/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  subscription: Subscription = new Subscription();
  user: Observable<Login>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {
    this.form = this.formBuilder.group({
      user: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.subscription = this.loginService.getUsers(this.form.value).subscribe();
    if (this.user) {
      this.router.navigate(['birthdays']);
      this.unsubscribe();
    } else {
      this.snackBar.open('Usuário ou senha inválidos!', 'X', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }

  clear() {
    this.form.setValue({ user: '', password: '' });
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
