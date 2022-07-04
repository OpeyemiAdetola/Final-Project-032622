import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Cart =[]

  constructor(private httpClient: HttpClient) { }

  getCart() {
    return this.httpClient.get<ICart[]>('http://localhost:5000');
  }
}

