import { Component, OnInit } from '@angular/core';
declare var CanvasJS: any;
import { MdDialogRef } from '@angular/material';
import { Person } from '../.././model/person';

@Component({
  selector: 'graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponent implements OnInit {
  personList: Person[];

  constructor(public dialogRef: MdDialogRef<GraphComponent>) { }

  ngOnInit() {
    console.log("itt" + this.personList);
    this.chart();
  }
  convertPersonList(): any[] {
    let ageMap = [];
    this.personList.sort((person1,person2) => person1.name < person2.name ? 1:-1);
    this.personList.forEach(value => { ageMap.push({ y: Number(value.age), label: value.name }); })
    return ageMap;
  }
  chart() {
    var chart = new CanvasJS.Chart("chartContainer", {

      title: {
        text: "Age Distribution of Employees"

      },
      animationEnabled: true,
      axisX: {
        interval: 1,
        gridThickness: 0,
        labelFontSize: 10,
        labelFontStyle: "normal",
        labelFontWeight: "normal",
        labelFontFamily: "Lucida Sans Unicode"

      },
      axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)"

      },

      data: [
        {
          type: "bar",
          name: "employees",
          axisYType: "secondary",
          color: "#014D65",
          dataPoints: this.convertPersonList()
        }
      ]
    });
    chart.render();
  }

}
