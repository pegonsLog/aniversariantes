import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BirthdayFormRoutingModule } from './birthday-form.routing-module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule,
    BirthdayFormRoutingModule
  ],
  exports: [FormComponent],
})
export class BirthdayFormModule {}
