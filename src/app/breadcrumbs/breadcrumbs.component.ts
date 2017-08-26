import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})

export class BreadcrumbsComponent implements OnInit {

  cateName: String;

  constructor(private route: ActivatedRoute) {
    this.cateName = route.snapshot.params['cateName'];
  }

  ngOnInit() {
  }

}
