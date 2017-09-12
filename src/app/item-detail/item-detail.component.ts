import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  itemId: String;
  constructor(private route: ActivatedRoute) {
    this.itemId = route.snapshot.params['itemId'];
  }
  arrSups = [];
  ngOnInit() {
    var i, j, k;
    var supplier = [{
      "id": "KASUGA",
      "name": "KASUGA Co., Ltd.",
      "address": "NO.149, Sec. 1, Guofeng Rd., Shengang Dist., Taichung City 429, Taiwan",
      "tel": "+886 4 252-529-95",
      "email": "sale@kasuga.jp",
      "fax": "+886 4 252-529-91",
      "web": "http://www.kasuga.jp",
      "link": ["http://www.kasuga.jp", "http://www.kasuga.jp"],
      "language": ["EN", "JP"],
      "product": ["Machining Center", "CNC Drilling & Tapping Center", "High Speed Machining Center", "CNC Double Column MC"],
      "items": [{
        "id": "BT40V",
        "cate_id": "MC",
        "cate_name": "Machining Center",
        "name": "BT40 Vertical",
        "guide": ["Linear Guide"],
        "control": ["Fanuc", "HEIDENHAIN"]
      },
      {
        "id": "BT40V5A",
        "cate_id": "MC",
        "cate_name": "Machining Center",
        "name": "BT40 Vertical 5-A",
        "guide": ["Linear Guide"],
        "control": ["Fanuc", "HEIDENHAIN"]
      },
      {
        "id": "BT50",
        "cate_id": "MC",
        "cate_name": "Machining Center",
        "name": "BT50",
        "guide": ["Linear Guide"],
        "control": ["Fanuc", "HEIDENHAIN"]
      }
      ]
    },
    {
      "id": "NUMEN",
      "name": "NUMEN Machinery Co., Ltd.",
      "address": "30, Alley 28, Lane 230, Sec. 5 Da Feng Road, Feng Yuan Dist., Taichung City 420, Taiwan",
      "tel": "+886-4-2533-0966",
      "email": "sales@numenmachinery.com",
      "fax": "+886-4-2533-0125",
      "web": "www.numenmachinery.com",
      "link": ["www.numenmachinery.com", "www.numenmachinery.com"],
      "language": ["TH", "EN", "JP"],
      "product": ["Machining Center"],
      "items": [{
        "id": "MCBT40V",
        "cate_id": "MC",
        "cate_name": "Machining Center",
        "name": "BT40 Vertical",
        "guide": ["Linear Guide"],
        "control": ["Fanuc", "HEIDENHAIN"]
      }]
    },
    {
      "id": "AKIRASEIKI",
      "name": "AKIRA SEIKI CO., LTD.",
      "address": "30, Alley 28, Lane 230, Sec. 5 Da Feng Road, Feng Yuan Dist., Taichung City 420, Taiwan",
      "tel": "+886-4-2355-2495",
      "email": "sales@akiraseiki.com",
      "fax": "+886-4-2355-2496",
      "web": "http://www.akiraseiki.com",
      "link": ["http://www.akiraseiki.com", "http://www.akiraseiki.com"],
      "language": ["TH", "EN", "JP"],
      "product": ["CNC Machining Center"],
      "items": [{
        "id": "BT40V",
        "cate_id": "CNCMC",
        "cate_name": "CNC Machining Center",
        "name": "BT40 Vertical",
        "guide": ["Linear Guide"],
        "control": ["Fanuc", "HEIDENHAIN"]
      },
      {
        "id": "BT40H",
        "cate_id": "CNCMC",
        "cate_name": "CNC Machining Center",
        "name": "BT40 Horizon",
        "guide": ["Linear Guide"],
        "control": ["Fanuc", "HEIDENHAIN"]
      }
      ]
    }
    ];

    this.route.params.subscribe(params => {
      let itemIdR = params["itemId"];
      this.itemId = itemIdR;
      for (i in supplier) {
        for (j in supplier[i].items) {
          if (this.itemId == supplier[i].items[j].id) {
            this.arrSups.push({
              "id": supplier[i].id,
              "name": supplier[i].name,
              "address": supplier[i].address,
              "tel": supplier[i].tel,
              "email": supplier[i].email,
              "fax": supplier[i].fax,
              "web": supplier[i].web,
              "link": supplier[i].link[j],
              "language": supplier[i].language,
              "product": supplier[i].product
            });
          }
        }
      }

    });
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
