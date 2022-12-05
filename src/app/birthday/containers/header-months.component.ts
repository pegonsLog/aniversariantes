import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';

@Component({
  selector: 'app-header-months',
  templateUrl: './header-months.component.html',
  styleUrls: ['./header-months.component.scss'],
})
export class HeaderMonthsComponent{

  month: string = '';

  constructor( ) {}

  changeMonth(monthMenu: string){
    this.month = monthMenu;
    console.log(this.month);
  }
}
