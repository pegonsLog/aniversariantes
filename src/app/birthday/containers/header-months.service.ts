import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Birthday } from 'api-birthdays/dist/birthdays/entities/birthday.entity';
import {
  catchError,
  first,
  map,
  Observable,
  of,
} from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Birthdays } from '../model/Birthday';

@Injectable({
  providedIn: 'root',
})
export class HeaderMonthsService {
  private readonly API = 'http://localhost:3000';

  private months = [
    { name: 'Jan' },
    { name: 'Fev' },
    { name: 'Mar' },
    { name: 'Abr' },
    { name: 'Mai' },
    { name: 'Jun' },
    { name: 'Jul' },
    { name: 'Ago' },
    { name: 'Set' },
    { name: 'Out' },
    { name: 'Nov' },
    { name: 'Dez' },
  ];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getMonths() {
    return this.months;
  }

  listAll(): Observable<Birthdays> {
    return this.http.get<Birthdays>(`${this.API}/birthdays`).pipe(
      first(),
      map((birthdays: Birthdays) =>
        birthdays.sort((birthdayA: Birthday, birthdayB: Birthday) =>
          this.order(birthdayA, birthdayB)
        )
      ),
      catchError(() => {
        this.onError('Erro ao carregar aniversariantes');
        return of([]);
      })
    );
  }

  listForMonth(month: string) {
    console.log(month);
  }

  loadById(id: number) {
    return this.http.get<Birthday>(`${this.API}/birthdays/${id}`).pipe(first());
  }

  save(record: Partial<Birthday>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Birthday>) {
    const birthday = {
      name: record.name,
      day: record.day,
      month: record.month,
    };
    return this.http
      .post<Birthday>(`${this.API}/birthdays`, birthday)
      .pipe(first());
  }

  private update(record: Partial<Birthday>) {
    return this.http
      .patch<Birthday>(`${this.API}/birthdays/${record.id}`, record)
      .pipe(first());
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/birthdays/${id}`).pipe(first());
  }
  order(birthdayA: Birthday, birthdayB: Birthday) {
    if (birthdayA.name > birthdayB.name) {
      return 1;
    }

    if (birthdayA.name < birthdayB.name) {
      return -1;
    }
    return 0;
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
