import { Component, OnInit } from '@angular/core';
import { Aniversariante } from 'src/app/model/aniversariante';
import { AniversariantesService } from '../aniversariantes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private aniversarianteService: AniversariantesService) {}

  create(aniversariante: Aniversariante) {
    this.aniversarianteService.create(aniversariante);
  }

  ngOnInit(): void {}
}
