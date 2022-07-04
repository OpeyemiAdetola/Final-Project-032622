import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { BeverageComponent } from './components/beverage/beverage.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { HomeComponent } from './components/home/home.component';
import { OfferComponent } from './components/offer/offer.component';
import { HeaderComponent } from './components/header/header.component';
import {CartComponent} from './components/cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food', component: FoodComponent },
  { path: 'beverage', component: BeverageComponent },
  { path: 'contactus', component: ContactusComponent },
  {path: 'cart', component: CartComponent} ,

  { path: 'offer', component: OfferComponent },
  { path: 'header', component: HeaderComponent }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }








