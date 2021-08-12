import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket = []

  basketUpdated = new EventEmitter<number>()

  constructor() {}

  addBasket(product: any) {
    this.basket.push(product as never)
    this.basketUpdated.emit(this.basket.length)
  }

  deleteBasket(product: any) {
    this.basket.splice(product, 1)
    this.basketUpdated.emit(this.basket.length)
  }
}
