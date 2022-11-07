import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { IconPipe } from './pipes/icon.pipe';


@NgModule({
  declarations: [ErrorDialogComponent, IconPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [ErrorDialogComponent, IconPipe]
})
export class SharedModule { }
