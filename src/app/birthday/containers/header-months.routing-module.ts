import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../components/birthdays-list/birthday-list.component';
import { HeaderMonthsComponent } from './header-months/header/header-months.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderMonthsComponent,
  },
  {
    path: 'components',
    loadChildren: () =>
      import('src/app/birthday/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderMonthRoutingModule {}
