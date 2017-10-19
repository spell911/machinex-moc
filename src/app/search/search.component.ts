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
  categoriesData: any;
  constructor(private dataservice: DataService, private completerService: CompleterService) {
    this.dataservice.fetchSearchData().subscribe(
      (data) => {
        this.dataService = completerService.local(this.filterData(data), 'name', 'name');
      }
    );
    this.dataservice.fetchCategoriesData().subscribe(
      (data) => {
        this.categoriesData = data;
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
    var i, j;
    var splitName = val.split('- ')[1];
    // console.log(splitName);
    for (i in this.categoriesData) {
      cateId = this.categoriesData[i].id;
      cateName = this.categoriesData[i].name;
      if (val.indexOf(cateName) > -1) {
        if (splitName === '' || splitName === undefined) {
          window.location.href = 'ItemView/' + cateId + '/' + cateName;
        } else {
          for (j in this.categoriesData[i].items) {
            itemId = this.categoriesData[i].items[j].id;
            itemName = this.categoriesData[i].items[j].name;
            if (splitName.indexOf(itemName) > -1) {
              console.log(cateId);
              console.log(cateName);
              console.log(itemId);
              console.log(itemName);
              window.location.href = 'ItemView/' + cateId + '/' + cateName + '/itemdetail/' + itemId + '/' + itemName;
            }
          }
        }
      }
    }
  }
}
