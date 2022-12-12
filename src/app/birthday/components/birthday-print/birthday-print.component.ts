import { Component, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of, Subscription} from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ComponentService } from '../components.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birthday-print',
  templateUrl: './birthday-print.component.html',
  styleUrls: ['./birthday-print.component.scss'],
})
export class BirthdayPrintComponent implements OnInit {
  @Output() birthdays$: any;
  month: string = "";

  constructor(
    private componentService: ComponentService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    ) {
      this.print();
    }

  print() {
    this.month = this.route.snapshot.params['month']
    console.log(this.month)
    this.birthdays$ = this.componentService.listForMonth(this.month).pipe(
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

  ngOnInit(){
  }
}
