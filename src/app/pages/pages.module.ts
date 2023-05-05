import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent
  ]
})
export class PagesModule { }
