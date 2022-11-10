import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { Aniversariante } from 'src/app/model/aniversariante';


@Injectable({
  providedIn: 'root',
})
export class AniversariantesService {
  private readonly API = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  list(): Observable<Aniversariante[]> {
    return this.http.get<Aniversariante[]>(this.API + 'aniversariantes').pipe(
      tap((aniversariantes: any) => console.log(aniversariantes)),
      first(),

    );
  }
  create(aniversariante: Aniversariante){
    return this.http.post<Aniversariante>(this.API + 'aniversariante', aniversariante);
  }
}
