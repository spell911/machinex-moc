import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css'],
  providers: [DataService]
})
export class SupplierDetailComponent implements OnInit {
  itemId: string;
  itemName: string;
  cateId: string;
  cateName: string;
  supId: string;
  supName: string;
  checkData: boolean;
  dataFilter = {};
  arrSups = [];
  arrAgent = [];
  constructor(private http: Http, private route: ActivatedRoute, private dataservice: DataService) {
    this.itemId = route.snapshot.params['itemId'];
    this.cateId = route.snapshot.params['cateId'];
    this.itemName = route.snapshot.params['itemName'];
    this.cateName = route.snapshot.params['cateName'];
    this.supId = route.snapshot.params['supId'];
    this.supName = route.snapshot.params['supName'];
    this.dataFilter = {
      "cateId": this.cateId,
      "itemId": this.itemId,
      "supId": this.supId,
      "guide": { "guide": [] },
      "control": { "control": [] },
      "language": { "language": [] },
      "page": "SupplierDetail"
    }
    // console.log(this.supId)
  }
  ngOnInit() {
    this.dataservice.fetchSupplierData().subscribe(
      (data) => this.arrSups = data
    );

    this.dataservice.fetchAgentData().subscribe(
      (a_data)  => this.arrAgent = a_data
    );
  }


}
