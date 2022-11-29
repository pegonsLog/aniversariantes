import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule, LoginRoutingModule, HttpClientModule],
  exports: [LoginComponent],
})
export class LoginModule {}
