import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

import { AniversariantesRoutingModule } from './aniversariantes-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, AniversariantesRoutingModule, AngularMaterialModule, SharedModule],
  exports: [ListComponent],
})
export class AniversariantesModule {}
