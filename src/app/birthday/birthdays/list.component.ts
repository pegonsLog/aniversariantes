import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { BirthdaysService } from '../birthdays.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  birthdays$: Observable<Birthday[]>;

  constructor(
    public dialog: MatDialog,
    private birthdaysService: BirthdaysService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.birthdays$ = this.birthdaysService.list().pipe(
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
