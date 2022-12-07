import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { FormComponent } from './birthday-form/form.component';
import { BirthdaysListComponent } from './birthdays-list/birthdays-list.component';
import { ListComponent } from './birthdays/list.component';
import { ComponentsRoutingModule } from './components.routing-module';
import { BirthdayPrintComponent } from './birthday-print/birthday-print.component';

@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    BirthdaysListComponent,
    BirthdayPrintComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ListComponent,
    FormComponent,
    BirthdaysListComponent,
    BirthdayPrintComponent,
  ],
})
export class ComponentsModule {}
