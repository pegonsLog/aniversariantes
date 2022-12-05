import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { BirthdaysRoutingModule } from './header-months.routing-module';

import { ComponentsModule } from './components/components.module';
import { HeaderMonthsComponent } from './containers/header-months.component';

@NgModule({
  declarations: [HeaderMonthsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    BirthdaysRoutingModule,
    ComponentsModule
  ],
  exports: [HeaderMonthsComponent],
})
export class HeaderMonthModule {}
