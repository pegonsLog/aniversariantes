import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Aniversariante } from 'src/app/model/aniversariante';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { AniversariantesService } from '../aniversariantes.service';

@Component({
  selector: 'app-aniversariantes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  aniversariantes$: Observable<Aniversariante[]>;
  displayedColumns: string[] = ['name', 'birthday', 'actions'];

  constructor(
    public dialog: MatDialog,
    private aniversariantesService: AniversariantesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onDelete(id: number) {
    this.aniversariantesService
      .delete(id)
      .subscribe((result) =>
        console.log('O aniversariante foi excluído com sucesso')
      );
  }
}
