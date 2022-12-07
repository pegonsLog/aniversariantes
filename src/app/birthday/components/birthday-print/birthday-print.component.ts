import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Birthday } from 'src/app/model/birthday';

@Component({
  selector: 'app-birthday-print',
  templateUrl: './birthday-print.component.html',
  styleUrls: ['./birthday-print.component.scss']
})
export class BirthdayPrintComponent implements OnInit {

  @Input() birthdays$: any;

  constructor() { }

  ngOnInit(): void {
  }

}
