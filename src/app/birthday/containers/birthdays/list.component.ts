import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, first, Observable, of } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { BirthdaysService } from '../../birthdays.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  birthdays$: Observable<Birthday[]> | null = null;
  listMonth: Observable<Birthday[]> | null = null;
  month: string = '';
  constructor(
    public dialog: MatDialog,
    private birthdaysService: BirthdaysService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
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
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(birthday: Birthday) {
    this.router.navigate(['edit', birthday.id], { relativeTo: this.route });
  }

  onRemove(birthday: Birthday) {
    this.birthdaysService
      .remove(birthday.id)
      .pipe(first())
      .subscribe(() => {
        this.snackBar.open('Registro removido com sucesso!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.refresh();
      });
  }

  listForMonth(){
    this.birthdaysService.listForMonth(this.month).pipe(first()).subscribe((list: any) => this.listMonth = list);
  }

}
