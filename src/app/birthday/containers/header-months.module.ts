import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';

import { HeaderMonthRoutingModule } from './header-months.routing-module';
import { HeaderMonthsComponent } from './header-months/header/header-months.component';

@NgModule({
  declarations: [HeaderMonthsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    HeaderMonthRoutingModule,
  ],
  exports: [HeaderMonthsComponent],
})
export class HeaderMonthModule {}
