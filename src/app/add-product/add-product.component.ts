import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public products = []

  public newProducts: any

  /* Input değerininin eklenmesi, en az 4 karakterden oluşması ve içi boş ise ekleme yapmasın. */
  public addProducts() {
    if (
      this.newProducts == ' ' ||
      this.newProducts.length <= 3 ||
      this.newProducts.trim().length === 0
    ) {
    } else {
      this.products.push(this.newProducts as never)
      this.newProducts = ''
    }
  }

  /* Silinmesi gereken todo için */
  public deleteProducts(index: any) {
    this.products.splice(index, 1)
  }
}
