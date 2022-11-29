import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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
    private router: Router,
    private loginService: LoginService
  ) {
    this.form = this.formBuilder.group({
      user: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.loginService.userAuth(this.form.value);
    if (this.loginService.auth) {
      this.router.navigate(['birthdays']);
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
}
