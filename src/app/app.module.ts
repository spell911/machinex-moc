import { APP_ROUTES_PROVIDER } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BreadcrumbModule } from 'angular2-crumbs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { SearchComponent } from './search/search.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

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
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER,
    BrowserModule,
    BreadcrumbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
