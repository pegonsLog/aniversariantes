import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'headermonths', component: HeaderMonthsComponent}
  {
    path: 'headermonths',
    loadChildren: () =>
      import('src/app/birthday/containers/header-months.module').then(
        (m) => m.HeaderMonthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
