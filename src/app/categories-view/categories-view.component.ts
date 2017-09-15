import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})

export class CategoriesViewComponent implements OnInit {

  cateName: String;
  results;

  constructor(private route: ActivatedRoute, private http: Http) {
    this.cateName = route.snapshot.params['cateName'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cateNameR = params["cateName"];
      this.cateName = cateNameR;
    });

    this.http.get('../assets/json/categories.json').subscribe(data => {
      this.results = data.json()['Categories'];
    });
  }

  categories = [
    {
      id: "MC",
      name: "Machining Center",
      img: "../assets/img/MC.jpg"
    },
    {
      id: "CNC-DTC",
      name: "CNC Drilling & Tapping Center",
      img: "../assets/img/CNC-DTC.jpg"
    },
    {
      id: "HSMC",
      name: "High Speed Machining Center",
      img: "../assets/img/HSMC.jpg"
    },
    {
      id: "CNC-DCMC",
      name: "CNC Double Column MC",
      img: "../assets/img/CNC-DCMC.jpg"
    },
    {
      id: "CNC-MC",
      name: "CNC Machining Center",
      img: "../assets/img/CNC-MC.jpg"
    },
    {
      id: "MC",
      name: "Machining Center",
      img: "../assets/img/MC.jpg"
    },
    {
      id: "CNC-DTC",
      name: "CNC Drilling & Tapping Center",
      img: "../assets/img/CNC-DTC.jpg"
    },
    {
      id: "HSMC",
      name: "High Speed Machining Center",
      img: "../assets/img/HSMC.jpg"
    },
    {
      id: "CNC-DCMC",
      name: "CNC Double Column MC",
      img: "../assets/img/CNC-DCMC.jpg"
    },
    {
      id: "CNC-MC",
      name: "CNC Machining Center",
      img: "../assets/img/CNC-MC.jpg"
    },
    {
      id: "MC",
      name: "Machining Center",
      img: "../assets/img/MC.jpg"
    },
    {
      id: "CNC-DTC",
      name: "CNC Drilling & Tapping Center",
      img: "../assets/img/CNC-DTC.jpg"
    },
    {
      id: "HSMC",
      name: "High Speed Machining Center",
      img: "../assets/img/HSMC.jpg"
    },
    {
      id: "CNC-DCMC",
      name: "CNC Double Column MC",
      img: "../assets/img/CNC-DCMC.jpg"
    },
    {
      id: "CNC-MC",
      name: "CNC Machining Center",
      img: "../assets/img/CNC-MC.jpg"
    },
    {
      id: "MC",
      name: "Machining Center",
      img: "../assets/img/MC.jpg"
    },
    {
      id: "CNC-DTC",
      name: "CNC Drilling & Tapping Center",
      img: "../assets/img/CNC-DTC.jpg"
    },
    {
      id: "HSMC",
      name: "High Speed Machining Center",
      img: "../assets/img/HSMC.jpg"
    },
    {
      id: "CNC-DCMC",
      name: "CNC Double Column MC",
      img: "../assets/img/CNC-DCMC.jpg"
    },
    {
      id: "CNC-MC",
      name: "CNC Machining Center",
      img: "../assets/img/CNC-MC.jpg"
    },
    {
      id: "MC",
      name: "Machining Center",
      img: "../assets/img/MC.jpg"
    },
    {
      id: "CNC-DTC",
      name: "CNC Drilling & Tapping Center",
      img: "../assets/img/CNC-DTC.jpg"
    },
    {
      id: "HSMC",
      name: "High Speed Machining Center",
      img: "../assets/img/HSMC.jpg"
    },
    {
      id: "CNC-DCMC",
      name: "CNC Double Column MC",
      img: "../assets/img/CNC-DCMC.jpg"
    },
    {
      id: "CNC-MC",
      name: "CNC Machining Center",
      img: "../assets/img/CNC-MC.jpg"
    }

  ];
}
