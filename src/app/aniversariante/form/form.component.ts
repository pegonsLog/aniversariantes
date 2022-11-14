import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AniversariantesService } from '../aniversariantes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup = this.formBuilder.group({
    name: [null],
    birthday: [null],
  });

  constructor(
    private aniversarianteService: AniversariantesService,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar
  ) {}

  onCancel() {
    console.log('Botão cancelar clicado');
  }

  onSubmit() {
    this.aniversarianteService.save(this.form.value);
  }
}
