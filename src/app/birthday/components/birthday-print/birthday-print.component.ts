import { Component, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ComponentService } from '../components.service';

@Component({
  selector: 'app-birthday-print',
  templateUrl: './birthday-print.component.html',
  styleUrls: ['./birthday-print.component.scss'],
})
export class BirthdayPrintComponent {
  @Output() birthdays$: any;
  @Input() print: any;

  constructor(
    private componentService: ComponentService,
    public dialog: MatDialog,
    private route: Router
    ) {}

  month(print: string) {
    console.log(print)
    this.birthdays$ = this.componentService.listForMonth(print).pipe(
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
