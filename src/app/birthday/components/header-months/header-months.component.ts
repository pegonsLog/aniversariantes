import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-months',
  templateUrl: './header-months.component.html',
  styleUrls: ['./header-months.component.scss'],
})
export class HeaderMonthsComponent{

  @Output() month = new EventEmitter(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute
   ) {
  }

  changeMonth(month: string){
    this.month.emit(month);
  }


}
