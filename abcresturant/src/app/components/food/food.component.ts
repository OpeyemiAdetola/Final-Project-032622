import { Component, Input, OnInit } from '@angular/core';
import { IFood } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

   foods!:IFood[];

  

   constructor(private foodService:FoodService) { 
    foodService.getFood().subscribe((results) =>{
      this.foods = results
    },
   
  )
}

   


  ngOnInit(): void {
  }

}
