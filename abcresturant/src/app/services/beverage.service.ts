import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeverage } from '../interfaces/beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {
  beverages = [
    {name: "Coffee", description: "Hot or Cold brew", price: "4"},
    {name: "Tea", description: "Black, green and Oolong Tea", price:" 15"},
    {name: "Smoothie", description: "Frozen fruits and Veggies blended with almond", price: "16"},
  ]


  constructor(private httpClient: HttpClient) { }



  getBeverage() {
    return this.httpClient.get<IBeverage[]>('http://localhost:5000');
  }
}