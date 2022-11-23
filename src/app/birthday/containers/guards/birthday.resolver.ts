import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';
import { BirthdaysService } from '../../birthdays.service';

@Injectable({
  providedIn: 'root',
})
export class BirthdayResolver implements Resolve<Birthday> {
  constructor(private birthdayService: BirthdaysService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Birthday> {
    if (route.params && route.params['id']) {
      return this.birthdayService.loadById(route.params['id']);
    }
    return of({ id: 0, name: '', birthday: '' });
  }
}
