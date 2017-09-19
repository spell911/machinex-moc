import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [DataService]
})
export class ItemDetailComponent implements OnInit {

  itemId: string;
  itemName: string;
  cateId: string;
  cateName: string;
  checkData: boolean;
  arrSups = [];
  supplier = [];
  constructor(private http: Http, private route: ActivatedRoute, private dataservice: DataService) {
    this.itemId = route.snapshot.params['itemId'];
    this.cateId = route.snapshot.params['cateId'];
    this.itemName = route.snapshot.params['itemName'];
    this.cateName = route.snapshot.params['cateName'];
  }

  fetchData() {
    return this.http.get('../assets/json/supplier.json')
      .map(
      (res) => res.json()['supplier']
      );
  }

  selectData(supplier, itemId, cateId) {
    var i, j, k;
    for (i in supplier) {
      for (j in supplier[i].items) {
        if ((itemId == supplier[i].items[j].id) && (cateId == supplier[i].items[j].cate_id)) {
          this.arrSups.push({
            "id": supplier[i].id,
            "name": supplier[i].name,
            "address": supplier[i].address,
            "tel": supplier[i].tel,
            "email": supplier[i].email,
            "fax": supplier[i].fax,
            "web": supplier[i].web,
            "link": supplier[i].link,
            "language": supplier[i].language,
            "product": supplier[i].product
          });
        }
      }
    }
  }

  ngOnInit() {

    // var supplier = this.dataservice.loadItem().subscribe();
    // var supplier = [];

    this.dataservice.fetchData().subscribe(

      (data) => this.supplier = data.sort(function(name1, name2) {
        if (name1.name < name2.name) {
          return -1;
        } else if (name1.name > name2.name) {
          return 1;
        } else {
          return 0;
        }
      })
    );
    var i, j, k;
    // supplier.sort(function(name1, name2) {
    //   if (name1.name < name2.name) {
    //     return -1;
    //   } else if (name1.name > name2.name) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    this.route.params.subscribe(params => {
      let itemIdR = params["itemId"];
      this.itemId = itemIdR;
    });
    this.selectData(this.supplier, this.itemId, this.cateId);

    // function selectData(supplier, itemId, cateId) {
    //   for (i in supplier) {
    //     for (j in supplier[i].items) {
    //       if ((itemId == supplier[i].items[j].id) && (cateId == supplier[i].items[j].cate_id)) {
    //         supplier.push({
    //           "id": supplier[i].id,
    //           "name": supplier[i].name,
    //           "address": supplier[i].address,
    //           "tel": supplier[i].tel,
    //           "email": supplier[i].email,
    //           "fax": supplier[i].fax,
    //           "web": supplier[i].web,
    //           "link": supplier[i].link,
    //           "language": supplier[i].language,
    //           "product": supplier[i].product
    //         });
    //       }
    //     }
    //   }
    // }


  }


  scaleBtOut(btnVal) {
    var btnScaleBt = document.getElementById('scale-bt');

    btnScaleBt.classList.remove("scale-out");
  }

  scaleLbOut() {
    var btnLb = document.getElementById('scale-Lb');
    btnLb.classList.remove("scale-out");
  }

  searchSup() {

  }

  checkAll(ele, type) {
    console.log(ele);
    console.log(type);
    var checkboxes_guide_form = document.forms["guide_form"].getElementsByTagName('input');
    var checkboxes_control_form = document.forms["control_form"].getElementsByTagName('input');
    var checkboxes_language_form = document.forms["language_form"].getElementsByTagName('input');
    if (ele.target.checked && type == 'guide') {
      for (var i = 0; i < checkboxes_guide_form.length; i++) {
        if (checkboxes_guide_form[i].type == 'checkbox') {
          checkboxes_guide_form[i].checked = true;
        }
      }
    } else if (ele.target.checked && type == 'control') {
      for (var i = 0; i < checkboxes_control_form.length; i++) {
        if (checkboxes_control_form[i].type == 'checkbox') {
          checkboxes_control_form[i].checked = true;
        }
      }
    } else if (ele.target.checked && type == 'lang') {
      for (var i = 0; i < checkboxes_language_form.length; i++) {
        if (checkboxes_language_form[i].type == 'checkbox') {
          checkboxes_language_form[i].checked = true;
        }
      }
    } else if (type == 'guide') {
      for (var i = 0; i < checkboxes_guide_form.length; i++) {
        console.log(i)
        if (checkboxes_guide_form[i].type == 'checkbox') {
          checkboxes_guide_form[i].checked = false;
        }
      }
    } else if (type == 'control') {
      for (var i = 0; i < checkboxes_control_form.length; i++) {
        console.log(i)
        if (checkboxes_control_form[i].type == 'checkbox') {
          checkboxes_control_form[i].checked = false;
        }
      }
    } else {
      for (var i = 0; i < checkboxes_language_form.length; i++) {
        console.log(i)
        if (checkboxes_language_form[i].type == 'checkbox') {
          checkboxes_language_form[i].checked = false;
        }
      }
    }
  }



}
