import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('../assets/json/supplier.json').map((res) => res.json()['supplier'])
  }

  loadItem(): Observable<any[]> {
    return this.http.get('../assets/json/supplier.json')
      .map((res) => {
        res.json()
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

}
