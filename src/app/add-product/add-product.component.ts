import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { BasketService } from '../services/basket.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}

  editRecordId = null
  formData = Array()
  basketData = Array()
  title = 'Forms'
  @ViewChild('f')
  Forms!: NgForm
  product = {
    id: '',
    name: '',
    category: '',
    desc: '',
    price: ''
  }

  onEdit(product: { [x: string]: any; id: any; name: any }) {
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
    this.basketService.addProduct(product)
    this.basketData = this.basketData.map((data) =>
      data['name'] === this.editRecordId ? this.Forms.value : data
    )
    this.basketData.push(product)
  }

  public deleteBasket(product: any) {
    this.basketService.deleteProduct(product)
    this.basketData = this.basketData.filter(
      (data) => data['id'] !== product.id
    )
  }
}
