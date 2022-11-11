import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Aniversariante } from 'src/app/model/aniversariante';
import { AniversariantesService } from '../aniversariantes.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  form: FormGroup;
  constructor(private aniversarianteService: AniversariantesService, private fb: FormBuilder) {
    this.form = fb.group({
      name: [null],
      birthday: [null]
    })
  }

  create(aniversariante: Aniversariante) {
    this.aniversarianteService.create(aniversariante);
  }

  ngOnInit(): void {}
}
