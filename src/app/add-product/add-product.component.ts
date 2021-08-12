import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { BasketService } from '../services/basket.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  basketCount: number | undefined
  constructor(private basketService: BasketService) {
    this.basketService.basketUpdated.subscribe(
      (count: number) => (this.basketCount = count)
    )
  }

  ngOnInit(): void {}

  editRecordId = null
  formData = Array()
  basketData = Array()
  title = 'Forms'
  totalPrice = 0
  @ViewChild('f')
  Forms!: NgForm
  product = {
    id: '',
    name: '',
    category: '',
    desc: '',
    price: ''
  }

  onEdit(product: { [x: string]: any; id: any }) {
    const { id, ...data } = product
    this.editRecordId = id
    this.Forms.setValue(data)
  }

  onDelete(product: { id: any }) {
    this.formData = this.formData.filter((data) => data['id'] !== product.id)
  }

  onSubmit() {
    if (this.editRecordId) {
      this.formData = this.formData.map((data) =>
        data['name'] === this.editRecordId ? this.Forms.value : data
      )
      this.editRecordId = null
    } else {
      const id = Date.now()

      const data = {
        id,
        ...this.Forms.value
      }
      this.formData.push(data)
    }

    this.Forms.reset()
  }
  public addToBasket(product: any) {
    this.basketService.addBasket(product)
    this.basketData = this.basketData.map((data) =>
      data['name'] === this.editRecordId ? this.Forms.value : data
    )
    this.basketData.push(product)
    this.totalPrice = this.totalPrice + product.price
  }

  public deleteBasket(product: any) {
    this.basketService.deleteBasket(product)

    /* Aynı id de olan bütün ürünleri siliyor
     this.basketData = this.basketData.filter(
      (data) => data['id'] !== product.id) */

    this.basketData.splice(product, 1)
    this.totalPrice = this.totalPrice - product.price
  }
}
