import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Birthday } from 'api-birthdays/dist/birthdays/entities/birthday.entity';
import { catchError, first, map, Observable, of, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Birthdays } from '../model/Birthday';

@Injectable({
  providedIn: 'root',
})
export class HeaderMonthsService implements OnDestroy{
  private readonly API = 'http://localhost:3000';

  private subscription = new Subscription();

  private months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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

  listForMonth(month: string): Observable<Birthdays> {
    return this.http
      .get<Birthdays>(`${this.API}/birthdays`)
      .pipe(
        map((birtdays: Birthdays) => birtdays.filter((x) => x.month === month))
      );
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
