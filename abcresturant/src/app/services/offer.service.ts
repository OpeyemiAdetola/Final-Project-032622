import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOffer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  offers = [
    { name: "BOGO", description: "Buy one get one free", percentage: "50", start_date: "2022-07-07", end_date: "2022-07-09", },
    { name: "BOGO", description: "Buy one get one free", percentage: "50", start_date: "2022-07-07", end_date: "2022-07-09", }

  ];
  constructor(private httpClient: HttpClient) { }



  getOffer() {
    return this.httpClient.get<IOffer[]>('http://localhost:5000');
  }
}