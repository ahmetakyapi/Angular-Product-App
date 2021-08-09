import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket = [];

  basketUpdated = new EventEmitter<number>();

  constructor() { }

  addProduct(product: any) {
    this.basket.push(product as never);
    this.basketUpdated.emit(this.basket.length);
  }
}
