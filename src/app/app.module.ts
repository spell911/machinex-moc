import { APP_ROUTES_PROVIDER } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SearchComponent } from './search/search.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FilterPipe } from './filter.pipe';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    ItemViewComponent,
    SearchComponent,
    CategoriesViewComponent,
    BreadcrumbsComponent,
    ItemDetailComponent,
    FilterPipe,
    SupplierDetailComponent,
    PreloaderComponent,
    SupplierViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER,
    MaterializeModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
