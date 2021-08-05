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

  public productName: any
  public productCategory: any
  public productStock: any
  public productDesc: any

  /* Input değerininin eklenmesi ve içi boş ise ekleme yapmasın. */
  public addProducts() {
    if (
      (this.productName == ' ',
      this.productName.trim().length === 0 || this.productCategory == ' ',
      this.productCategory.trim().length === 0 || this.productStock == ' ',
      this.productStock.trim().length === 0 || this.productDesc == ' ',
      this.productDesc.trim().length === 0)
    ) {
    } else {
      ;[
        this.products.push(this.productName as never) || this.productName == '',
        this.products.push(this.productCategory as never) ||
          this.productCategory == '',
        this.products.push(this.productStock as never) ||
          this.productStock == '',
        this.products.push(this.productDesc as never) || this.productDesc == ''
      ]
    }
  }

  /* Silinmesi gereken ürün için */
  public deleteProducts() {
    this.products.splice(
      this.productName ||
        this.productCategory ||
        this.productStock ||
        this.productDesc,
      4
    )
  }
}
