import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';


@Injectable({
  providedIn: 'root',
})
export class BirthdaysService {
  private readonly API = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  list(): Observable<Birthday[]> {
    return this.http.get<Birthday[]>(this.API + 'birthdays').pipe(
      tap((birthdays: any) => console.log(birthdays)),
      first(),

    );
  }
  save(record: Partial<Birthday>){
    return this.http.post<Birthday>(this.API  + 'birthdays', record).pipe(first());
  }

  delete(id: number){
    return this.http.delete<Birthday>(this.API + 'birthdays').pipe(first());
  }
}
