import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  
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
    },
    {
      itemName: "MC-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Link to Supplier",
      itemDesc: "this a goof machine for every factory!"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
