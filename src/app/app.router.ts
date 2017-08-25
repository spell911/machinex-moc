import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CategoriesViewComponent } from "./categories-view/categories-view.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'CategoriesView/:cateName',
    component: CategoriesViewComponent
  },
  {
    path: 'CategoriesView/:cateName',
    component: BreadcrumbsComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
