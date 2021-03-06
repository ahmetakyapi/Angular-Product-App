import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { NavbarComponent } from './navbar/navbar.component'
import { AddProductComponent } from './add-product/add-product.component'
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddProductComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
