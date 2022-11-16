import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BirthdaysService } from '../../birthdays.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = this.formBuilder.group({
    id: [],
    name: [''],
    birthday: [''],
  });

  constructor(
    private birthdaysService: BirthdaysService,
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private snackBar: MatSnackBar
  ) {}

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
