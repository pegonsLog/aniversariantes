import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderMonthModule } from '../birthday/header-months.module';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HeaderMonthModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
