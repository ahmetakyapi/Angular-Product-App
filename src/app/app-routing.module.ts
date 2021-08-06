import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddProductComponent } from './add-product/add-product.component'
import { BasketComponent } from './basket/basket.component'
import { CartComponent } from './cart/cart.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },{
    path: 'basket',
    component: BasketComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
