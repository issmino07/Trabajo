import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes:Routes = [
  //rutas protegidas
  {path:'', component: PagesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'products', component: ProductsComponent},
  {path:'categories', component: CategoriesComponent},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NoFoundPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
