import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
/*
This is not a real service, beacaue does not send any data to server using REST, 
the personlist is readed once from persons.json file and then stored only in the memory.
The goal of the test application was only to build the frontend part, so there is no backend behind it.
*/
@Injectable()
export class PersonService {
  personList: Person[];
  constructor(private http: Http) {
  }

  getAllPersons(): Observable<Person[]> {
    return this.http.get('assets/persons.json')
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  savePersons(newPersonList: Person[]) {
    this.personList = newPersonList;
  }

  addNewPerson(newPerson: Person) {
    this.personList.push(newPerson);
  }

  deletePersonByName(deletedPerson: Person) {
    let personToDelete: Person[] = this.personList.filter(person => person.name == deletedPerson.name);
    if (personToDelete.length == 1) {
      this.deletePersonWithName(deletedPerson.name);
    } else if (personToDelete.length > 1) {
      console.log("More than one person with the same name, cannot be deleted")
    } else {
      console.log("The person does not exist");
    }
  }

  private deletePersonWithName(name:string){
     for (var i = 0; i < this.personList.length; i++)
        if (this.personList[i].name === name) {
          this.personList.splice(i, 1);
          break;
        }
  }

}
