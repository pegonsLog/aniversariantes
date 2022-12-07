import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, first, Observable, of } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { HeaderMonthsService } from '../header-months.service';

@Component({
  selector: 'app-header-months',
  templateUrl: './header-months.component.html',
  styleUrls: ['./header-months.component.scss'],
})
export class HeaderMonthsComponent {
  birthdays$: Observable<Birthday[]> | null = null;

  constructor(
    private headerMonthService: HeaderMonthsService,
    public dialog: MatDialog
  ) {

  }

  changeMonth(monthMenu: string) {
    this.birthdays$ = this.headerMonthService.list(monthMenu).pipe(
      catchError(() => {
        this.onError('Erro ao carregar aniversariantes');
        return of([]);
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
