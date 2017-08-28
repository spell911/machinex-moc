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
      itemLink: "All item of Machine-A Categories",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemCateName: "Machine-B",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-B Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-C",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-C Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-D",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-D Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-E",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-E Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-F",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-F Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-G",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-G Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-H",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-H Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-I",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-I Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-J",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-J Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-K",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-K Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-L",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-L Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-M",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-M Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-N",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-N Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-O",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-O Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-P",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-P Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-Q",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-Q Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-R",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-R Categories",
      itemDesc: "this a goof machine for every factory!"
    },
    {
      itemCateName: "Machine-S",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-S Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-T",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-T Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-U",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-U Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-V",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-V Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-W",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-W Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-X",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-X Categories",
      itemDesc: "this a goof machine for every factory!"
    },{
      itemCateName: "Machine-Y",
      itemImg: "/assets/img/machine-test.jpg",
      itemLink: "All item of Machine-Y Categories",
      itemDesc: "this a goof machine for every factory!"
    }
  ];
}
