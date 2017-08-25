import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
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
