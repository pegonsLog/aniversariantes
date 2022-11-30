import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  @Output() birthdayList = new EventEmitter<boolean>();
  form: FormGroup;
  users: User[] = [];
  subscription: Subscription = new Subscription();

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
    this.subscription = this.loginService
      .getAll()
      .subscribe((users) => (this.users = users));

    for (let u of this.users) {
      if (
        this.form.value.user == u.user &&
        this.form.value.password == u.password
      ) {
        console.log("Deu");
        return this.birthdayList.emit(true);
      } }
        console.log('Não deu');
        this.snackBar.open('Usuário ou senha inválidos!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        })
  }

  clear() {
    this.form.setValue({ user: '', password: '' });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
