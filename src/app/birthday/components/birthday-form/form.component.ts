import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute } from '@angular/router';
import { BirthdaysService } from '../../birthdays.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    birthday: [''],
  });

  constructor(
    private birthdaysService: BirthdaysService,
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    // const birthday: Birthday = this.route.snapshot.data['birthday'];
    // this.form.setValue({
    //   _id: birthday._id,
    //   name: birthday.name,
    //   birthday: birthday.birthday,
    // });
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.birthdaysService.save(this.form.value).subscribe(
      () => this.onSuccess(),
      () => this.onError()
    ),
      this.onClear();
  }

  private onSuccess() {
    this.snackBar.open('Registro inserido com sucesso!', '', {
      duration: 3000,
    });
  }

  private onError() {
    this.snackBar.open('Erro na inclusão do registro!', '', { duration: 3000 });
  }

  private onClear() {
    this.form.reset();
  }
}
