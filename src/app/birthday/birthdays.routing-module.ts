import { FormComponent } from './birthday-form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './birthdays/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'new',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdaysRoutingModule {}
