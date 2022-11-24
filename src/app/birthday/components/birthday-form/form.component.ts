import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';
import { Birthday } from 'src/app/model/birthday';
import { BirthdaysService } from '../../birthdays.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  form = this.formBuilder.group({
    id: [0],
    name: [''],
    birthday: [''],
  });

  constructor(
    private birthdaysService: BirthdaysService,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const birthday: Birthday = this.route.snapshot.data['birthday'];
    this.form.setValue({
      id: birthday.id,
      name: birthday.name,
      birthday: birthday.birthday,
    });
  }

  async refreshOrCancel() {
   await this.router.navigate([''], { relativeTo: this.route });
  }

  onSubmit() {

    this.birthdaysService.save(this.form.value).subscribe(
      () => this.onSuccess(),
      () => this.onError()
    );
    this.refreshOrCancel()
  }

  private onSuccess() {
    this.snackBar.open('Registro inserido com sucesso!', '', {
      duration: 1000
    });
  }

  private onError() {
    this.snackBar.open('Erro na inclusão do registro!', '', { duration: 3000 });
  }

  private onClear() {
    this.form.reset();
  }
}
