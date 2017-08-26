import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_ROUTES_PROVIDER } from '../app.router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
@NgModule({
  imports: [
    APP_ROUTES_PROVIDER
  ]
})
export class CategoriesComponent implements OnInit {

  results;
  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('../assets/json/categories.json').subscribe(data => {
      this.results = data.json()['Categories'];
    });

  }

  setActive(value){
    alert(value)

  }
}
