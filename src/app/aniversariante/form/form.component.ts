import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AniversariantesService } from '../aniversariantes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup;
  constructor(
    private aniversarianteService: AniversariantesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = formBuilder.group({
      name: [null],
      birthday: [null],
    });
  }

  onCancel() {
    console.log('Botão cancelar clicado');
  }

  onSubmit() {
    this.aniversarianteService.save(this.form.value);
  }
}
