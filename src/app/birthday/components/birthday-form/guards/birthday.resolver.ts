import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Birthday } from 'src/app/birthday/model/Birthday';
import { ComponentService } from '../../components.service';

@Injectable({
  providedIn: 'root',
})
export class BirthdayResolver implements Resolve<Birthday> {
  constructor(private componentService: ComponentService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Birthday> {
    if (route.params && route.params['id']) {
      return this.componentService.loadById(route.params['id']);
    }
    return of({ id: 0, name: '', day: '', month: '' });
  }
}
