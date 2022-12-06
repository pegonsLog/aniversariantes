import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './birthday-form/form.component';
import { ListComponent } from './birthdays/list.component';
import { BirthdayResolver } from './guards/birthday.resolver';
import { HeaderMonthsComponent } from './header-months/header-months.component';


const routes: Routes = [

  {
    path: 'headermonths',
    component: HeaderMonthsComponent,
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
