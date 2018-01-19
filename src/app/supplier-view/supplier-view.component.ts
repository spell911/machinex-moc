import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from '../data/data.service';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css'],
  providers: [DataService]
})

export class SupplierViewComponent implements OnInit {

  arrSups = [];

  constructor(private http: Http, private route: ActivatedRoute, private dataservice: DataService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.dataservice.fetchSupplierData().subscribe(
      (data) => this.arrSups = data
    );
  }

}
