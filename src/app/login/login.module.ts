import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule, LoginRoutingModule],
  exports: [LoginComponent],
})
export class LoginModule {}
