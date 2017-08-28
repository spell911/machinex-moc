import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})

export class BreadcrumbsComponent implements OnInit {

  cateName: String;
  itemName: String;
  breadList = [];
  cateNameCheck:boolean;
  itemNameCheck:boolean;
  constructor(private route: ActivatedRoute) {

    if(route.snapshot.params['cateName'] === undefined){
      this.cateNameCheck = false;
    }else{
      this.cateNameCheck = true;
    }

    if(route.snapshot.params['itemName'] === undefined){
      this.itemNameCheck = false;
    }else{
      this.itemNameCheck = true;
    }

    this.cateName = route.snapshot.params['cateName'];
    this.itemName = route.snapshot.params['itemName'];

    // alert(this.cateNameCheck + "," + this.itemNameCheck);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateNameR = params["cateName"];
      let itemNameR = params["itemName"];
      this.cateName = cateNameR;
      this.itemName = itemNameR;
    });
  }


}
