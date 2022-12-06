import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components.routing-module';
import { FormComponent } from './birthday-form/form.component';
import { BirthdaysListComponent } from './birthdays-list/birthdays-list.component';
import { ListComponent } from './birthdays/list.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderMonthsComponent } from './header-months/header-months.component';



@NgModule({
  declarations: [ListComponent, FormComponent, BirthdaysListComponent, HeaderMonthsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule

  ],
  exports: [ListComponent, FormComponent, BirthdaysListComponent, HeaderMonthsComponent]
})
export class ComponentsModule { }
