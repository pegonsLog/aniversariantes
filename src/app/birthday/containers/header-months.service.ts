import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Birthday } from 'api-birthdays/dist/birthdays/entities/birthday.entity';
import { filter, first, map, Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  getMonths() {
    return this.months;
  }

  listAll(): Observable<Birthday[]> {
    return this.http.get<Birthday[]>(`${this.API}/birthdays`).pipe(first());
  }

  listForMonth(month: string) {
   // return this.listAll().pipe(map((ev: any) => ev.month === month));
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
}
