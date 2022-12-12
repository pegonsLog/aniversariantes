import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Birthday } from 'api-birthdays/dist/birthdays/entities/birthday.entity';

@Component({
  selector: 'fragment-list',
  templateUrl: './fragment.component.html',
  styleUrls: ['./fragment.component.scss'],
})
export class FragmentComponent {
  @Input() birthdays: any;
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns: string[] = ['name', 'birthday', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(birthday: Birthday) {
    this.edit.emit(birthday);
  }

  onRemove(birthday: Birthday) {
    this.remove.emit(birthday);
  }
}
