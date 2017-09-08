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
      itemCateName: "Machine-A",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },
    {
      itemCateName: "Machine-B",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-C",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-D",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-E",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-F",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-H",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-I",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-J",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-K",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-L",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-M",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-N",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-O",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-P",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-Q",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-R",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },
    {
      itemCateName: "Machine-S",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-T",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-U",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-V",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-W",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-X",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    },{
      itemCateName: "Machine-Y",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "Click for more Details",
      itemDesc: "this is a good machine for every factory!"
    }
  ];
}
