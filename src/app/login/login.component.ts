import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    user: [''],
    password: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) {

  }

  onSubmit() {
    this.loginService.getUsers(this.form.value.password, this.form.value.user)
  }

  clear() {}
}
