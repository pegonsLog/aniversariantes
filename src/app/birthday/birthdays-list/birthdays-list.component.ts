import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Birthday } from 'src/app/model/birthday';

@Component({
  selector: 'app-birthdays-list',
  templateUrl: './birthdays-list.component.html',
  styleUrls: ['./birthdays-list.component.scss'],
})
export class BirthdaysListComponent implements OnInit {
  @Input() birthdays: Birthday[] = [];
  readonly displayedColumns: string[] = ['name', 'birthday', 'actions'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
