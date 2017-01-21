import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../.././model/person';

@Component({
  selector: 'data-change-visualizer',
  templateUrl: './data-change-visualizer.component.html',
  styleUrls: ['./data-change-visualizer.component.css']
})
export class DataChangeVisualizerComponent implements OnInit {

 @Input() person: Person[];

  constructor() { }

  ngOnInit() {
  }

  get personInJsonFormat () {
  return JSON.stringify(this.person, null, 4);
}


}
