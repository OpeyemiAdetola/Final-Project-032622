import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  
  @Input  () offers!:IOffer[];

// put data in constuctor
constructor(private offerService:OfferService) { 
 offerService.getOffer().subscribe((results) =>{
 this.offers = results
},
(err) => {
  console.log(err);
}
)
}


  ngOnInit(): void {
  }

}
