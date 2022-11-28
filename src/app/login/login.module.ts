import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { LoginComponent } from './login.component';
=======
import { LoginRoutingModule } from './login-routing.module';
>>>>>>> f79391e8f71804853862af8f066d6c39b66adbdb

@NgModule({
  declarations: [LoginComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule, LoginRoutingModule],
  exports: [LoginComponent],
})
export class LoginModule {}
