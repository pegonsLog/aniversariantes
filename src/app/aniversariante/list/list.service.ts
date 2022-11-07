import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { Aniversariante } from '../../model/ aniversariante';

@Injectable({
  providedIn: 'root',
})
export class AniversariantesService {
  private readonly API = '/assets/aniversariantes.json';
  constructor(private http: HttpClient) {}

  list(): Observable<Aniversariante[]> {
    return this.http.get<Aniversariante[]>(this.API).pipe(
      first(),
      tap((aniversariantes) => console.log(aniversariantes))
    );
  }
}
