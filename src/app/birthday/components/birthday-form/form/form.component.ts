import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute } from '@angular/router';
import { Birthday } from 'src/app/birthday/model/Birthday';
import { ComponentService } from '../../components.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = this.formBuilder.group({
    id: [0],
    name: [''],
    day: [''],
    month: [''],
  });

  constructor(
    private componentService: ComponentService,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const birthday: Birthday = this.route.snapshot.data['birthday'];
    this.form.setValue({
      id: birthday.id,
      name: birthday.name,
      day: birthday.day,
      month: birthday.month,
    });
  }

  async onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.componentService.save(this.form.value).subscribe(
      () => this.onSuccess(),
      () => this.onError()
    );
    this.onClear();
  }

  private onSuccess() {
    this.snackBar.open('Registro inserido com sucesso!', '', {
      duration: 1000,
    });
  }

  private onError() {
    this.snackBar.open('Erro na inclusão do registro!', '', { duration: 3000 });
  }

  private onClear() {
    this.form.reset();
  }
}
