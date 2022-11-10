import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Aniversariante } from 'src/app/model/aniversariante';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { AniversariantesService } from '../aniversariantes.service';

@Component({
  selector: 'app-aniversariantes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  aniversariantes$: Observable<Aniversariante[]>;
  displayedColumns: string[] = ['name', 'birthday'];

  constructor(
    public dialog: MatDialog,
    private aniversariantesService: AniversariantesService
  ) {
    this.aniversariantes$ = this.aniversariantesService.list().pipe(
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
  ngOnInit(): void {}
}
