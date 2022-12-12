import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderMonthsComponent } from './birthday/containers/header-months/header/header-months.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'headermonths', component: HeaderMonthsComponent},
  // {
  //   path: 'headermonths',
  //   loadChildren: () =>
  //     import('src/app/birthday/containers/header-months.module').then(
  //       (m) => m.HeaderMonthModule
  //     ),
  // },
  {
    path: 'components',
    loadChildren: () =>
      import('src/app/birthday/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
