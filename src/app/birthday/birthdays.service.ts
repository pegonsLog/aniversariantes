import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';

@Injectable({
  providedIn: 'root',
})
export class BirthdaysService {
  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  list(): Observable<Birthday[]> {
    return this.http.get<Birthday[]>(`${this.API}/birthdays`).pipe(first());
  }

  loadById(id: number) {
    return this.http.get<Birthday>(`${this.API}/birthdays/${id}`).pipe(first());
  }

  save(record: Partial<Birthday>) {
    if (record.id) {
      console.log('update');
      console.log(record.id);
      return this.update(record);
    }
    console.log('create');
    console.log(record.id);
    return this.create(record);
  }

  private create(record: Partial<Birthday>) {
    const birthday = { name: record.name, birthday: record.birthday };
    return this.http.post<Birthday>(`${this.API}/birthdays`, birthday);
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
