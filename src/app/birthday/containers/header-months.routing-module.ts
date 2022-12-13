import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderMonthsComponent } from './header-months/header/header-months.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderMonthsComponent,
    children: [
      { path: 'formonths/:month', component: HeaderMonthsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderMonthRoutingModule {}
