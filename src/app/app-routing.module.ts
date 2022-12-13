import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'formonths',
    loadChildren: () =>
      import('src/app/birthday/containers/header-months.module').then(
        (m) => m.HeaderMonthModule
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('src/app/birthday/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('src/app/birthday/components/birthday-form/birthday-form.module').then(
        (m) => m.BirthdayFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
