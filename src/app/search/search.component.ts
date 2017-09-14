import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@NgModule({
  imports: [
    //...
    MaterializeModule,
  ],
  //...
})

export class SearchComponent implements OnInit {


  constructor() {
  }

  locations: any;

  ngOnInit() {
    this.locations = {
      'Machining Center BT30V': null,
      'Machining Center BT40V': null,
      'Machining Center BT50V': null,
      'Machining Center BT40V5A': null,
      'CNC Double Culumn Machining Center BT40V': null,
      'CNC Drilling&Trapping Center': null
    };
  }


}
