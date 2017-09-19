import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css'],
  providers: [DataService]
})
export class ItemViewComponent implements OnInit {

  cateId: string;
  cateName: string;
  dataFilter = {};
  arrItems = [];

  constructor(private route: ActivatedRoute, private dataservice: DataService) {
    this.cateId = route.snapshot.params['cateId'];
    this.cateName = route.snapshot.params['cateName'];
    this.dataFilter = { "cateId": this.cateId, "itemId": "", "page": "Catagories" }
  }

  ngOnInit() {

    this.dataservice.fetchCategoriesData().subscribe(
      (data) => this.arrItems = data.sort(function(name1, name2) {
        if (name1.name < name2.name) {
          return -1;
        } else if (name1.name > name2.name) {
          return 1;
        } else {
          return 0;
        }
      })
    );

    this.route.params.subscribe(params => {
      let cateIdR = params["cateId"];
      this.cateId = cateIdR;
    });

  }
}
