import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data/data.service';
import { PagerService } from '../pager.service';
import 'rxjs/add/operator/map'
declare var jQuery: any;
@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css'],
  providers: [DataService, PagerService]
})

export class CategoriesViewComponent implements OnInit {

  cateId: String;
  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private route: ActivatedRoute, private dataservice: DataService, private pagerService: PagerService) {
    this.cateId = route.snapshot.params['cateId'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateIdR = params["cateId"];
      this.cateId = cateIdR;
    });

    this.dataservice.fetchCategoriesData()
      .subscribe(data => {
        // set items to json response
        this.allItems = data;
        // initialize to page 1
        this.setPage(1);
        console.log(data.length);
      });

  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    jQuery("html, body").animate({ scrollTop: "0" });
    // window.scrollTo(0, 0);
  }

}
