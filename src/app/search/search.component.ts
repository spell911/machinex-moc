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
    MaterializeModule,
  ],
})

export class SearchComponent implements OnInit {


  constructor() {

  }

  locations: any;

  ngOnInit() {
    this.locations = {
      'Machining Center': '../assets/img/MC.jpg',
      'Machining Center BT30 Vertical': '../assets/img/MC.jpg',
      'Machining Center BT40 Vertical': '../assets/img/MC.jpg',
      'Machining Center BT50 Vertical': '../assets/img/MC.jpg',
      'Machining Center BT40 Vertical 5-A': '../assets/img/MC.jpg'
      // 'CNC Double Culumn Machining Center': '../assets/img/CNC-DCMC.jpg',
      // 'CNC Drilling&Trapping Center': '../assets/img/CNC-DCMC.jpg'
    }
  }

  searchData(val: string) {
    var cateId, cateName, itemId, itemName;
    if (val.indexOf('Machining Center') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      window.location.href = 'ItemView/' + cateId + '/' + cateName;
    }
    if (val.indexOf('Machining Center BT30 Vertical') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT30V"
      itemName = "BT30 Vertical"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName
    }
    if (val.indexOf('Machining Center BT40 Vertical') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT40V"
      itemName = "BT40 Vertical"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName
    }
    if (val.indexOf('Machining Center BT50 Vertical') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT50V"
      itemName = "BT50 Vertical"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName;
    }
    if (val.indexOf('Machining Center BT40 Vertical 5-A') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT50V5A"
      itemName = "BT40 Vertical 5-A"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName;
    }
    // if (val.indexOf('CNC Double Culumn Machining Center') > -1) {
    //   cateId = "CNCDCMC";
    //   cateName = "CNC Double Column MC"
    //   window.location.href = 'ItemView/' + cateId + '/' + cateName;
    // }
    // if (val.indexOf('CNC Drilling&Trapping Center') > -1) {
    //   cateId = "CNCDTC";
    //   cateName = "CNC Drilling & Tapping Center"
    //   window.location.href = 'ItemView/' + cateId + '/' + cateName;
    // }

  }

}
