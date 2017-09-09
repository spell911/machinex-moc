import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  itemName: String;


  constructor(private route: ActivatedRoute) {
    this.itemName = route.snapshot.params['itemName'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemNameR = params["cateName"];
      this.itemName = itemNameR;
    });
    // console.log('hello there! '+ this.itemId);
  }


  scaleBtOut(btnVal) {
    var btnScaleBt = document.getElementById('scale-bt');

    btnScaleBt.classList.remove("scale-out");
  }

  scaleLbOut() {
    var btnLb = document.getElementById('scale-Lb');
    btnLb.classList.remove("scale-out");
  }

  checkAll(ele, type) {
    console.log(ele);
    console.log(type);
    var checkboxes_specific_form = document.forms["specific_form"].getElementsByTagName('input');
    var checkboxes_language_form = document.forms["language_form"].getElementsByTagName('input');
    if (ele.target.checked && type == 'spec') {
      for (var i = 0; i < checkboxes_specific_form.length; i++) {
        if (checkboxes_specific_form[i].type == 'checkbox') {
          checkboxes_specific_form[i].checked = true;
        }
      }
    } else if (ele.target.checked && type == 'lang') {
      for (var i = 0; i < checkboxes_language_form.length; i++) {
        if (checkboxes_language_form[i].type == 'checkbox') {
          checkboxes_language_form[i].checked = true;
        }
      }
    } else if (type == 'spec') {
      for (var i = 0; i < checkboxes_specific_form.length; i++) {
        console.log(i)
        if (checkboxes_specific_form[i].type == 'checkbox') {
          checkboxes_specific_form[i].checked = false;
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
