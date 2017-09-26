import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbsclean.sass']
})

export class BreadcrumbsComponent implements OnInit {

  cateId: string;
  cateName: string;
  itemId: string;
  itemName: string;
  breadList = [];
  cateIdCheck:boolean;
  itemIdCheck:boolean;

  constructor(private route: ActivatedRoute) {
    this.cateId = route.snapshot.params['cateId'];
    this.cateName = route.snapshot.params['cateName'];
    this.itemId = route.snapshot.params['itemId'];
    this.itemName = route.snapshot.params['itemName'];

    if(this.cateId === undefined){
      this.cateIdCheck = false;
    }else{
      this.cateIdCheck = true;
    }

    if(this.itemId === undefined){
      this.itemIdCheck = false;
    }else{
      this.itemIdCheck = true;
    }
    // alert(this.cateNameCheck + "," + this.itemNameCheck);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateIdR = params['cateId'];
      let itemIdR = params['itemId'];
      this.cateId = cateIdR;
      this.itemId = itemIdR;
    });
  }


}
