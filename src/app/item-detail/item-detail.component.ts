import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from '../data/data.service';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [DataService]
})
export class ItemDetailComponent implements OnInit {
  /*data*/
  itemId: string;
  itemName: string;
  cateId: string;
  cateName: string;
  checkData: boolean;
  dataFilter = {};
  arrSups = [];
  supplier = [];
  /*checkbox*/
  controlForm: FormGroup;
  guideForm: FormGroup;
  languageForm: FormGroup;



  constructor(private http: Http, private route: ActivatedRoute, private dataservice: DataService, private fb: FormBuilder) {
    this.itemId = route.snapshot.params['itemId'];
    this.cateId = route.snapshot.params['cateId'];
    this.itemName = route.snapshot.params['itemName'];
    this.cateName = route.snapshot.params['cateName'];


    this.dataFilter = {
      "cateId": this.cateId,
      "itemId": this.itemId,
      "guide": { "guide": [] },
      "control": { "control": [] },
      "language": { "language": [] },
      "page": "itemDetail"
    }

  }
  ngOnInit() {
    this.dataservice.fetchSupplierData().subscribe(
      (data) => this.arrSups = data.sort(function(name1, name2) {
        if (name1.name < name2.name) {
          return -1;
        } else if (name1.name > name2.name) {
          return 1;
        } else {
          return 0;
        }
      })
    );

    this.route.params.subscribe(params => {
      let itemIdR = params["itemId"];
      this.itemId = itemIdR;
    });

    /*checkbox*/
    this.controlForm = this.fb.group({ control: this.fb.array([]) });
    this.guideForm = this.fb.group({ guide: this.fb.array([]) });
    this.languageForm = this.fb.group({ language: this.fb.array([]) });

  }



  /*checkbox*/
  onChange(data: string, isChecked: boolean, byForm: string) {
    var FormArray;
    var i;
    if (byForm == "guideForm") {
      FormArray = <FormArray>this.guideForm.get('guide');
    } else if (byForm == "controlForm") {
      FormArray = <FormArray>this.controlForm.get('control');
    } else {
      FormArray = <FormArray>this.languageForm.get('language');
    }

    if (isChecked) {
      FormArray.push(new FormControl(data));
    } else {
      let index = FormArray.controls.findIndex(x => x.value == data)
      FormArray.removeAt(index);
    }
  }

  scaleBtOut(btnVal) {
    var btnScaleBt = document.getElementById('scale-bt');
    btnScaleBt.classList.remove("scale-out");
  }

  scaleLbOut() {
    var btnLb = document.getElementById('scale-Lb');
    btnLb.classList.remove("scale-out");
  }

  checkAll(ele, type, btn) {
    console.log(ele);
    console.log(type);
    var checkboxes_guide_form = document.forms["guide_form"].getElementsByTagName('input');
    var checkboxes_control_form = document.forms["control_form"].getElementsByTagName('input');
    var checkboxes_language_form = document.forms["language_form"].getElementsByTagName('input');
    if (ele.target.checked && type == 'guideForm') {
      this.guideForm = this.fb.group({ guide: this.fb.array([]) });
      for (var i = 0; i < checkboxes_guide_form.length; i++) {
        if (checkboxes_guide_form[i].type == 'checkbox') {
          checkboxes_guide_form[i].checked = true;
          this.onChange(checkboxes_guide_form[i].value, checkboxes_guide_form[i].checked, type);
        }
      }
    } else if (ele.target.checked && type == 'controlForm') {
      this.controlForm = this.fb.group({ control: this.fb.array([]) });
      for (var i = 0; i < checkboxes_control_form.length; i++) {
        if (checkboxes_control_form[i].type == 'checkbox') {
          checkboxes_control_form[i].checked = true;
          this.onChange(checkboxes_control_form[i].value, checkboxes_control_form[i].checked, type);
        }
      }
    } else if (ele.target.checked && type == 'languageForm') {
      this.languageForm = this.fb.group({ language: this.fb.array([]) });
      for (var i = 0; i < checkboxes_language_form.length; i++) {
        if (checkboxes_language_form[i].type == 'checkbox') {
          checkboxes_language_form[i].checked = true;
          this.onChange(checkboxes_language_form[i].value, checkboxes_language_form[i].checked, type);
        }
      }
    } else if (type == 'guideForm') {
      this.guideForm = this.fb.group({ guide: this.fb.array([]) });
      for (var i = 0; i < checkboxes_guide_form.length; i++) {
        if (checkboxes_guide_form[i].type == 'checkbox') {
          checkboxes_guide_form[i].checked = false;
          this.onChange(checkboxes_guide_form[i].value, checkboxes_guide_form[i].checked, type);
        }
      }
    } else if (type == 'controlForm') {
      this.controlForm = this.fb.group({ control: this.fb.array([]) });
      for (var i = 0; i < checkboxes_control_form.length; i++) {
        console.log(i)
        if (checkboxes_control_form[i].type == 'checkbox') {
          checkboxes_control_form[i].checked = false;
          this.onChange(checkboxes_control_form[i].value, checkboxes_control_form[i].checked, type);
        }
      }
    } else {
      this.languageForm = this.fb.group({ language: this.fb.array([]) });
      for (var i = 0; i < checkboxes_language_form.length; i++) {
        console.log(i)
        if (checkboxes_language_form[i].type == 'checkbox') {
          checkboxes_language_form[i].checked = false;
          this.onChange(checkboxes_language_form[i].value, checkboxes_language_form[i].checked, type);
        }
      }
    }
  }

  searchData() {
    this.dataFilter = {
      "cateId": this.cateId,
      "itemId": this.itemId,
      "guide": this.guideForm.value,
      "control": this.controlForm.value,
      "language": this.languageForm.value,
      "page": "itemDetail"
    }
  }

  preLoader() {
    var preloaderDOM = document.getElementById('preLoader');
    if (preloaderDOM.className == "hide") {
      preloaderDOM.className = "show";
      preloaderDOM.className = "center";
    } else {
      preloaderDOM.className = 'hide';
    }
  }

}
