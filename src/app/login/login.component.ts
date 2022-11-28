import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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
  }

  clear() {}
}
