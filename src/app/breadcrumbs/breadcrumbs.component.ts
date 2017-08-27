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
  breadCheck = false;
  constructor(private route: ActivatedRoute) {
    this.cateName = route.snapshot.params['cateName'];
    this.itemName = route.snapshot.params['itemName'];
    this.breadList = [
      {
        cateName: route.snapshot.params['cateName'],
        itemName: route.snapshot.params['itemName'],
      }
    ];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateNameR = params["cateName"];
      let itemNameR = params["itemName"];
      this.cateName = cateNameR;
      this.itemName = itemNameR;
      this.breadList = [
        {
          cateName: cateNameR,
          itemName: itemNameR,
        }
      ];
    });
  }


}
