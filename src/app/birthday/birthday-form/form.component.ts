import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BirthdaysService } from '../birthdays.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = this.formBuilder.group({
    name: [''],
    birthday: [''],
  });

  constructor(
    private birthdaysService: BirthdaysService,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar
  ) {}

  onCancel() {
    console.log('Botão cancelar clicado');
  }

  onSubmit() {
    this.birthdaysService.save(this.form.value).subscribe((result) => this.onSuccess());
  }

  onSuccess(){
    this.snackBar.open('Registro inserido com sucesso')
  }
}
