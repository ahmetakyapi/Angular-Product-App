import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddProductComponent } from './add-product/add-product.component'
import { BasketComponent } from './basket/basket.component'
import { LoginComponent } from './login/login.component'
import { ProductComponent } from './product/product.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
