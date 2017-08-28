import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  itemName : String;

  constructor(private route: ActivatedRoute) {
    this.itemName = route.snapshot.params['itemName'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemNameR = params["cateName"];
      this.itemName = itemNameR;
    });
    // console.log('hello there! '+ this.itemId);
  }

  scaleBtOut() {
   var btnScaleBt = document.getElementById('scale-bt');
   btnScaleBt.classList.remove("scale-out");

}

  scaleLbOut(){
    var btnLb = document.getElementById('scale-Lb');
    btnLb.classList.remove("scale-out");
  }



}
