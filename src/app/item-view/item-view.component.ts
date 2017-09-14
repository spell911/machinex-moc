import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  cateId: string;
  cateName: string;

  constructor(private route: ActivatedRoute) {
    this.cateId = route.snapshot.params['cateId'];
    this.cateName = route.snapshot.params['cateName'];
  }

  ngOnInit() {
    var i;
    var items = [
      {
        id: "BT40V",
        cate_id: "MC",
        name: "BT40 Vertical",
        sup: ["KASUKA", "NUMEN"]
      },
      {
        id: "BT50V",
        cate_id: "MC",
        name: "BT50 Vertical",
        sup: ["KASUKA", "NUMEN"]
      },
      {
        id: "BT40V5A",
        cate_id: "MC",
        name: "BT40 Vertical 5-A",
        sup: ["KASUKA"]
      },
      {
        id: "BT30V",
        cate_id: "CNCMC",
        name: "BT30 Vertical",
        sup: ["AKIRA"]
      },
      {
        id: "BT40V",
        cate_id: "CNCMC",
        name: "BT40 Vertical",
        sup: ["AKIRA"]
      },
      {
        id: "BT40H",
        cate_id: "CNCMC",
        name: "BT40 Horizontal",
        sup: ["AKIRA"]
      }
    ];
    this.route.params.subscribe(params => {
      let cateIdR = params["cateId"];
      this.cateId = cateIdR;
    });

    for (i in items) {
      if (this.cateId == items[i].cate_id) {
        this.arrItems.push({ "id": items[i].id, "name": items[i].name });
      }
    }

  }

  arrItems = [];

}
