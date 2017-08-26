import { Routes, RouterModule } from "@angular/router";
import { CategoriesViewComponent } from "./categories-view/categories-view.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemViewComponent } from "./item-view/item-view.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: ItemViewComponent
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
    path: 'CategoriesView/:cateName/itemdetail/:itemName',
    component: ItemDetailComponent
  },
  {
    path: 'itemdetail/:itemName',
    component: ItemDetailComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
