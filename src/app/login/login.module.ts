import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { LoginComponent } from './login.component';
import { BirthdaysModule } from '../birthday/birthdays.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule, HttpClientModule, BirthdaysModule],
  exports: [LoginComponent],
})
export class LoginModule {}
