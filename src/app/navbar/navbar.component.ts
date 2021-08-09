import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  basketCount: number | undefined;

  constructor(private basketService: BasketService) {
    this.basketService.basketUpdated.subscribe(
      (count: number) => this.basketCount = count )
}  

}
