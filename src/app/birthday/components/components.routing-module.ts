import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderMonthsComponent } from '../containers/header-months/header-months.component';
import { FormComponent } from './birthday-form/form.component';
import { BirthdaysListComponent } from './birthdays-list/birthdays-list.component';
import { ListComponent } from './birthdays/list.component';
import { BirthdayResolver } from '../containers/guards/birthday.resolver';
import { BirthdayPrintComponent } from './birthday-print/birthday-print.component';


const routes: Routes = [

  {
    path: 'headermonths',
    component: HeaderMonthsComponent,
  },
  {
    path: 'print',
    component: BirthdayPrintComponent,
  },

  {
    path: 'new',
    component: FormComponent, resolve: {birthday: BirthdayResolver}
  },
  {
    path: 'edit/:id',
    component: FormComponent, resolve: {birthday: BirthdayResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
