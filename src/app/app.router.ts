import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
