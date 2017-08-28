import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
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
      itemName: "MC-A-01",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-A-02",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-A-03",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-A-04",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-A-05",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemName: "MC-A-06",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    }
  ];

}
