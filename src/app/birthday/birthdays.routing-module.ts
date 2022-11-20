import { BirthdayResolver } from './containers/guards/birthday.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/birthday-form/form.component';
import { ListComponent } from './containers/birthdays/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
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
export class BirthdaysRoutingModule {}
