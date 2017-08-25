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
  }

}
