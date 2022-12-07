import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderMonthsComponent } from './birthday/containers/header-months/header-months.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'headermonths', component: HeaderMonthsComponent}
  // {
  //   path: 'list',
  //   loadChildren: () =>
  //     import('src/app/birthday/components/components.module').then(
  //       (m) => m.ComponentsModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
