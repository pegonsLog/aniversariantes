import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { BirthdaysRoutingModule } from './birthdays.routing-module';
import { FormComponent } from './components/birthday-form/form.component';

import { BirthdaysListComponent } from './components/birthdays-list/birthdays-list.component';
import { ListComponent } from './containers/birthdays/list.component';

@NgModule({
  declarations: [ListComponent, FormComponent, BirthdaysListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    BirthdaysRoutingModule,
    FormsModule
  ],
  exports: [ListComponent, FormComponent, BirthdaysListComponent],
})
export class BirthdaysModule {}
