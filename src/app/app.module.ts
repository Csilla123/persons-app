import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AddPersonDialogComponent } from './components/add-person-dialog/add-person-dialog.component';
import { DataChangeVisualizerComponent } from './components/data-change-visualizer/data-change-visualizer.component';
import { GraphComponent } from './components/graph-component/graph-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    AddPersonDialogComponent,
    DataChangeVisualizerComponent,
    GraphComponent
  ],
  entryComponents: [AddPersonDialogComponent, GraphComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

