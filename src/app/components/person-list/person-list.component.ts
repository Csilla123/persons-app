import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../.././model/person'

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  @Input() personList: Person[];
  @Output() delete = new EventEmitter();
 
  constructor() {
  }

  ngOnInit() {
  }

  onDelete(person:Person) {
     this.delete.emit(person);
  }
}
