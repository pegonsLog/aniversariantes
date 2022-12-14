import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Birthday } from 'api-birthdays/dist/birthdays/entities/birthday.entity';
import { catchError, first, Observable, of, Subscription } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { HeaderMonthsService } from '../../header-months.service';

@Component({
  selector: 'app-header-months',
  templateUrl: './header-months.component.html',
  styleUrls: ['./header-months.component.scss'],
})
export class HeaderMonthsComponent implements OnDestroy {
  birthdays$: Observable<Birthday[]> | null = null;
  prints$: Observable<Birthday[]> | null = null;
  months: any = [];

  @Output() birthdays: EventEmitter<any> = new EventEmitter(false);

  subscription: Subscription = new Subscription();
  constructor(
    private headerMonthService: HeaderMonthsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.loadMonth();
    this.refresh();
  }

  loadMonth() {
    this.months = this.headerMonthService.getMonths();
  }

  forMonth(month: string) {
    // this.subscription = this.headerMonthService.listForMonth(month).subscribe((b: any) => {this.birthdays$ = b},
    //   catchError(() => {
    //     this.onError('Erro ao carregar aniversariantes');
    //     return of([]);
    //   }
    // ))
  }

  refresh() {
    this.birthdays$ = this.headerMonthService.listAll().pipe(
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
    this.headerMonthService
      .remove(birthday.id)
      .pipe(first())
      .subscribe(() => {
        this.snackBar.open('Registro removido com sucesso!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
