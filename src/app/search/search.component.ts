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

  ngOnInit(){
      this.locations = {'apple': null, 'google': null};
  }


}
