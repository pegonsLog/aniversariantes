import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

import { BirthdayPrintComponent } from './birthday-print/birthday-print.component';
import { ListComponent } from './birthdays-list/birthday-list.component';
import { FragmentComponent } from './birthdays-list/fragment/fragment.component';
import { ComponentsRoutingModule } from './components.routing-module';

@NgModule({
  declarations: [ListComponent, BirthdayPrintComponent, FragmentComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [ListComponent, BirthdayPrintComponent, FragmentComponent],
})
export class ComponentsModule {}
