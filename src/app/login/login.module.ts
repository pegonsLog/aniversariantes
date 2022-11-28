import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  exports: [LoginComponent],
})
export class LoginModule {}
