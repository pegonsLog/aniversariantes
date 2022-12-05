import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './birthday-form/form.component';
import { BirthdaysListComponent } from './birthdays-list/birthdays-list.component';
import { BirthdayResolver } from './guards/birthday.resolver';


const routes: Routes = [
  {
    path: 'components',
    component: BirthdaysListComponent,
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
