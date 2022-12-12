import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Birthday } from 'src/app/birthday/model/Birthday';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  list(): Observable<Birthday[]> {
    return this.http.get<Birthday[]>(`${this.API}/birthdays`).pipe(first());
  }

  listForMonth(month: string): Observable<Birthday[]> {
    return this.http.get<Birthday[]>(`${this.API}/birthdays/${month}`).pipe(first());
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/birthdays/${id}`).pipe(first());
  }
}
