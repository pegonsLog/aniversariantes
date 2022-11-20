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

  loadById(id: string) {
    return this.http.get<Birthday>(`${this.API}/${id}`);
  }

  save(record: Partial<Birthday>) {
    // console.log(record);
    if (record.id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Birthday>) {
    return this.http.post<Birthday>(this.API, record).pipe(first());
  }

  private update(record: Partial<Birthday>) {
    return this.http
      .put<Birthday>(`${this.API}/${record.id}`, record)
      .pipe(first());
  }

  delete(id: string) {
    const url = `${this.API}/birthdays/${id}`;
    return this.http.delete<Birthday>(url).pipe(first());
  }
}
