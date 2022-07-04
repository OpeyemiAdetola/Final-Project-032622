import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFood } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foods = [
    { food_name: "Farm Steak House", description: "Sauteed sirloin steak, melted provolone, onions...", price: "54", foodtype_id: "1" },
    { food_name: "Salads", description: "Your choice of fresh veggies, tossed with our signature italian dressing", price: "44", foodtype_id: "2" },
    { food_name: "Pizza", description: "An irrestible blend of 4 Italian cheeses,sprinkled with parsley and a drizzle of Tuscan Olive oil.", price: "24", foodtype_id: "3" },
  ];



  constructor(private httpClient: HttpClient) { }



  getFood() {
    return this.httpClient.get<IFood[]>('http://localhost:5000');
  }
}