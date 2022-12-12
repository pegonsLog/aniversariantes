import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Birthday } from '../../model/Birthday';

@Injectable({
  providedIn: 'root'
})
export class BirthdayFormService {

  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

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
    const birthday = { name: record.name, day: record.day, month: record.month };
    return this.http.post<Birthday>(`${this.API}/birthdays`, birthday).pipe(first());
  }

  private update(record: Partial<Birthday>) {
    return this.http
      .patch<Birthday>(`${this.API}/birthdays/${record.id}`, record)
      .pipe(first());
  }

}
