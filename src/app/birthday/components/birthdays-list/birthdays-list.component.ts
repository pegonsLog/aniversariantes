import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Birthday } from 'src/app/model/birthday';

@Component({
  selector: 'app-birthdays-list',
  templateUrl: './birthdays-list.component.html',
  styleUrls: ['./birthdays-list.component.scss'],
})
export class BirthdaysListComponent {
  @Input() birthdays: Birthday[] = [];
  readonly displayedColumns: string[] = ['name', 'birthday', 'actions'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
