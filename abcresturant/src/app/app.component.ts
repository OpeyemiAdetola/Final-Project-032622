import { Component } from '@angular/core';
import { IBeverage } from './interfaces/beverage';
import { IFood } from './interfaces/food';
import { IOffer } from './interfaces/offer';
import { BeverageService } from './services/beverage.service';
import { ContactusService } from './services/contactus.service';
import { FoodService } from './services/food.service';
import { OfferService } from './services/offer.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

foods: IFood[];
beverages: IBeverage[];
offers: IOffer[];


  constructor (private foodService:FoodService,private beverageService:BeverageService,private offerService:OfferService,private contactusService:ContactusService){
    this.foods = foodService.foods;
    this.beverages = beverageService.beverages;
    this.offers = offerService.offers;

  }
}
