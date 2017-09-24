import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { DataService } from '../data/data.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})

@NgModule({
  imports: [
    //...
    MaterializeModule,
  ],
  //...
})

export class SearchComponent implements OnInit {


  constructor(private http: Http, private dataservice: DataService) {
  }

  locations;
  dataServe: any;
  ngOnInit() {
    var dataFromService = [];
    this.dataservice.fetchSearchData().subscribe(
      data => {
        this.dataServe = data;
        console.log("I CANT SEE DATA HERE: ", this.dataServe);
      }
    );
    this.locations = {
      'Machining Center BT30V': "../assets/img/MC.jpg",
      'Machining Center BT40V': "../assets/img/MC.jpg",
      'Machining Center BT50V': "../assets/img/MC.jpg",
      'Machining Center BT40V5A': "../assets/img/MC.jpg",
      'CNC Double Culumn Machining Center BT40V': "../assets/img/CNC-MC.jpg",
      'CNC Drilling&Trapping Center': "../assets/img/CNC-DTC.jpg"
    };
  }

}
