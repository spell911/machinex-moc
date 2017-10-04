import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchSupplierData() {
    return this.http.get('../assets/json/supplier.json').map((res) => res.json()['supplier'])
  }

  fetchCategoriesData() {
    return this.http.get('../assets/json/categories.json').map((res) => res.json()['categories'])
  }

  fetchSearchData() {
    return this.http.get('../assets/json/categories.json').map(
      (res) =>
        res.json()['categories']
    )
  }

}
