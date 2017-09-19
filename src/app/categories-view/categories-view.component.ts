import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { DataService } from '../data/data.service';


@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css'],
  providers: [DataService]
})

export class CategoriesViewComponent implements OnInit {

  cateId: String;
  categories = [];

  constructor(private route: ActivatedRoute, private http: Http, private dataservice: DataService) {
    this.cateId = route.snapshot.params['cateId'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateIdR = params["cateId"];
      this.cateId = cateIdR;
    });

    this.dataservice.fetchCategoriesData().subscribe(
      (data) => this.categories = data
    );
  }
}
