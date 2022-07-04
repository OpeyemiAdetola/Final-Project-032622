import { Component, OnInit } from '@angular/core';
import { IBeverage } from 'src/app/interfaces/beverage';
import { BeverageService } from 'src/app/services/beverage.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
beverages!: IBeverage[]
// put data in constuctor

constructor(private beverageService:BeverageService) { 
 beverageService.getBeverage().subscribe((results) =>{
  this.beverages = results
},

)
}

 
  ngOnInit(): void {
  }

}

