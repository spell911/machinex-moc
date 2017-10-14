import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { DataService } from '../data/data.service';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})

@NgModule({
  imports: [
    MaterializeModule,
  ],
})

export class SearchComponent implements OnInit {

  protected locations: any;
  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchDatas = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];

  constructor(private dataservice: DataService, private completerService: CompleterService) {
    this.dataservice.fetchSearchData().subscribe(
      (data) => {
        this.dataService = completerService.local(this.filterData(data), 'name', 'name');
      }
    );
  }
  ngOnInit() {
  }

  filterData(data: any) {
    var arr = [];
    var obj = {};
    var name, img;
    for (var i in data) {
      img = data[i].img
      name = data[i].name
      obj = { "name": name, "img": img }
      arr.push(obj);
      for (var j in data[i].items) {
        name = data[i].name + " - " + data[i].items[j].name
        obj = { "name": name, "img": img }
        arr.push(obj);
      }
    }
    // console.log(arr);
    return arr
  }

  searchData(val: string) {
    var cateId, cateName, itemId, itemName;
    var i;
    for (i in this.locations) {
      console.log(this.locations[i]);
      if (val.indexOf(this.locations[i]) > -1) {
        cateId = "MC";
        cateName = "Machining Center"
        itemId = "BT30V"
        itemName = "BT30 Vertical"
        window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName
      }
    }

    if (val.indexOf('Machining Center') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      window.location.href = 'ItemView/' + cateId + '/' + cateName;
    }
    if (val.indexOf('Machining Center BT30 - Vertical') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT30V"
      itemName = "BT30 Vertical"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName
    }
    if (val.indexOf('Machining Center - BT40 Vertical') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT40V"
      itemName = "BT40 Vertical"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName
    }
    if (val.indexOf('Machining Center - BT50 Vertical') > -1) {
      cateId = "MC";
      cateName = "Machining Center"
      itemId = "BT50V"
      itemName = "BT50 Vertical"
      window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName;
    }
    if (val.indexOf('Machining Center  - BT40 Vertical 5-A') > -1) {
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
