import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './birthdays/list.component';
import { FormComponent } from './birthday-form/form.component';
import { BirthdaysListComponent } from './birthdays-list/birthdays-list.component';

@NgModule({
  declarations: [ListComponent, FormComponent, BirthdaysListComponent],
  imports: [CommonModule, AngularMaterialModule, SharedModule, ReactiveFormsModule],
  exports: [ListComponent, FormComponent, BirthdaysListComponent],
})
export class BirthdaysModule {}
