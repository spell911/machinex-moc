import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  itemId: string;
  itemName: string;
  cateId: string;
  cateName: string;
  // supplier;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.itemId = route.snapshot.params['itemId'];
    this.cateId = route.snapshot.params['cateId'];
    this.itemName = route.snapshot.params['itemName'];
    this.cateName = route.snapshot.params['cateName'];
    // this.http.get('../assets/json/supplier.json')
    //   .subscribe(res => supplier = res.json()['supplier']);

  }

  arrSups = [];

  ngOnInit() {
    var i, j, k;
    var supplier = [
      {
        id: "KASUGA",
        name: "KASUGA Co., Ltd.",
        address: "NO.149, Sec. 1, Guofeng Rd., Shengang Dist., Taichung City 429, Taiwan",
        tel: "+886 4 252-529-95",
        email: "sale@kasuga.jp",
        fax: "+886 4 252-529-91",
        web: "http://www.kasuga.jp",
        link: [{
          name: "http://www.kasuga.jp",
          bage: 5
        },
        {
          name: "http://www.kasuga.en",
          bage: 7
        }
        ],
        language: ["EN", "JP"],
        product: ["Machining Center", "CNC Drilling & Tapping Center", "High Speed Machining Center", "CNC Double Column MC"],
        items: [{
          id: "BT40V",
          cate_id: "MC",
          cate_name: "Machining Center",
          name: "BT40 Vertical",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        },
        {
          id: "BT40V5A",
          cate_id: "MC",
          cate_name: "Machining Center",
          name: "BT40 Vertical 5-A",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        },
        {
          id: "BT50V",
          cate_id: "MC",
          cate_name: "Machining Center",
          name: "BT50 Vertical",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        }
        ]
      },
      {
        id: "NUMEN",
        name: "NUMEN Machinery Co., Ltd.",
        address: "30, Alley 28, Lane 230, Sec. 5 Da Feng Road, Feng Yuan Dist., Taichung City 420, Taiwan",
        tel: "+886-4-2533-0966",
        email: "sales@numenmachinery.com",
        fax: "+886-4-2533-0125",
        web: "www.numenmachinery.com",
        link: [{
          name: "http://www.numenmachinery.jp",
          bage: 5
        },
        {
          name: "http://www.numenmachinery.en",
          bage: 7
        }
        ],
        language: ["TH", "EN", "JP"],
        product: ["Machining Center"],
        items: [{
          id: "BT40V",
          cate_id: "MC",
          cate_name: "Machining Center",
          name: "BT40 Vertical",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        }]
      },
      {
        id: "AKIRASEIKI",
        name: "AKIRA SEIKI CO., LTD.",
        address: "30, Alley 28, Lane 230, Sec. 5 Da Feng Road, Feng Yuan Dist., Taichung City 420, Taiwan",
        tel: "+886-4-2355-2495",
        email: "sales@akiraseiki.com",
        fax: "+886-4-2355-2496",
        web: "http://www.akiraseiki.com",
        link: [
          {
            name: "http://www.akiraseiki.jp",
            bage: 5
          },
          {
            name: "http://www.akiraseiki.en",
            bage: 7
          }
        ],
        language: ["TH", "EN", "JP"],
        product: ["CNC Machining Center"],
        items: [{
          id: "BT30V",
          cate_id: "CNCMC",
          cate_name: "CNC Machining Center",
          name: "BT30 Vertical",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        },
        {
          id: "BT40V",
          cate_id: "CNCMC",
          cate_name: "CNC Machining Center",
          name: "BT40 Vertical",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        },
        {
          id: "BT40H",
          cate_id: "CNCMC",
          cate_name: "CNC Machining Center",
          name: "BT40 Horizon",
          guide: ["Linear Guide"],
          control: ["Fanuc", "HEIDENHAIN"]
        }
        ]
      }
    ];

    supplier.sort(function(name1, name2) {
      if (name1.name < name2.name) {
        return -1;
      } else if (name1.name > name2.name) {
        return 1;
      } else {
        return 0;
      }
    });

    this.route.params.subscribe(params => {
      let itemIdR = params["itemId"];
      this.itemId = itemIdR;
    });
    for (i in supplier) {
      for (j in supplier[i].items) {
        if ((this.itemId == supplier[i].items[j].id) && (this.cateId == supplier[i].items[j].cate_id)) {
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
