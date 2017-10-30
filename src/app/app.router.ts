import { Routes, RouterModule } from "@angular/router";
import { CategoriesViewComponent } from "./categories-view/categories-view.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { ItemViewComponent } from "./item-view/item-view.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SupplierDetailComponent } from "./supplier-detail/supplier-detail.component";
const APP_ROUTES: Routes = [
  {
    path: '',
    component: CategoriesViewComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'ItemView/:cateId/:cateName',
    component: ItemViewComponent
  },
  {
    path: 'ItemView/:cateId/:cateName/itemdetail/:itemId/:itemName',
    component: ItemDetailComponent
  },
  {
    path: 'ItemView/:cateId/:cateName/itemdetail/:itemId/:itemName/supdetail/:supId/:supName',
    component: SupplierDetailComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
