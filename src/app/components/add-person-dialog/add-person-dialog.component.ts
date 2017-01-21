import { Component, OnInit} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Person } from '../.././model/person';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-person-dialog',
  templateUrl: './add-person-dialog.component.html',
  styleUrls: ['./add-person-dialog.component.css']
})
export class AddPersonDialogComponent implements OnInit {
  public newPerson: Person = <Person>{};
  username: FormControl;
  constructor(public dialogRef: MdDialogRef<any>) {
    this.username = new FormControl('', [<any>Validators.required]);
  }
       
  ngOnInit() {
  }

}
