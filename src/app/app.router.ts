import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CategoriesViewComponent } from "./categories-view/categories-view.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
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
  },
  {
    path: 'itemdetail',
    component: ItemDetailComponent
  }


];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
