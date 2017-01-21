import { Component, ViewContainerRef } from '@angular/core';
import { PersonListComponent } from '.././person-list/person-list.component';
import { AddPersonDialogComponent } from '.././add-person-dialog/add-person-dialog.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { PersonService } from '../.././services/person.service';
import { Person } from '../.././model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})

export class AppComponent {
  title = 'Persons Test App';
  dialogRef: MdDialogRef<any>;
  personList: Person[];
  changedPerson:Person;

  constructor(private personService: PersonService,
    public dialog: MdDialog,
    public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons() {
    this.personService.getAllPersons().subscribe(res => { this.personList = res; this.savePersons(); }, err => console.log(err));
  }

  savePersons() {
    this.personService.savePersons(this.personList);
  }


  onAdd() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(AddPersonDialogComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.changedPerson = result;
        this.personService.addNewPerson(result);
      }
    });
  }

  onDelete($event){
    this.changedPerson = $event;
    this.personService.deletePersonByName($event);
  }
}
