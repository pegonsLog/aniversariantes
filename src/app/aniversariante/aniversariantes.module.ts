import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

import { AniversariantesRoutingModule } from './aniversariantes-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, AniversariantesRoutingModule, AngularMaterialModule, SharedModule, ReactiveFormsModule],
  exports: [ListComponent, FormComponent],
})
export class AniversariantesModule {}
