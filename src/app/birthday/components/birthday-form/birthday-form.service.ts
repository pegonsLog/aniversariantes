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



}
