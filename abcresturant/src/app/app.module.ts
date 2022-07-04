import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './components/food/food.component';
import { BeverageComponent } from './components/beverage/beverage.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OfferComponent } from './components/offer/offer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';

import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    BeverageComponent,
    ContactusComponent,
    OfferComponent,
    HomeComponent,
   
    HeaderComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
