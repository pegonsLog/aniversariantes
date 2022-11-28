import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from './login.service';
>>>>>>> f79391e8f71804853862af8f066d6c39b66adbdb

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
<<<<<<< HEAD
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      user: [''],
      password: [''],
    });
    // const login: Login = this.route.snapshot.data['login'];
    // this.form.setValue({
    //   user: login.user,
    //   password: login.password,
    // });
  }

  onSubmit() {
    this.router.navigate(['birthdays'])
=======
    private loginService: LoginService,
  ) {

  }

  onSubmit() {
    this.loginService.getUsers(this.form.value.password, this.form.value.user)
>>>>>>> f79391e8f71804853862af8f066d6c39b66adbdb
  }

  clear() {}
}
