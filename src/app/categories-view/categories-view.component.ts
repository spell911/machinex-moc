import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})

export class CategoriesViewComponent implements OnInit {

  cateName: String;

  constructor(private route: ActivatedRoute) {
    this.cateName = route.snapshot.params['cateName'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateNameR = params["cateName"];
      this.cateName = cateNameR;
    });
  }

  items = [
    {
      itemName: "MC-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    }
  ];
}
