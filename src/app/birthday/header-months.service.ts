import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';

@Injectable({
  providedIn: 'root',
})
export class HeaderMonthsService {
  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  list(month: string): Observable<Birthday[]> {
        return this.http.get<Birthday[]>(`${this.API}/birthdays/${month}`);
  }

}
