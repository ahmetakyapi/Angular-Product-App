import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  editRecordId = null;
  formData = Array()
  title = 'Forms';
  @ViewChild('f')
  Forms!: NgForm;
  product = {
    id: "",
    name: "",
    category: "",
    desc: "",
    price: "",
  }

  form = ['one', 'two', 'three'];
  selected = 'two'
  submitted = false;

onEdit(product: { [x: string]: any; id: any; }) {
  
  const {id, ...data} = product
  this.editRecordId = id;

  this.Forms.setValue(data)

}

onDelete(product: { id: any; }) {
    this.formData = this.formData.filter((data) => data['id'] !== product.id)
}

  onSubmit() {
    this.submitted = true;

    if (this.editRecordId) {
      this.formData = this.formData.map((data) => data['name'] === this.editRecordId ? this.Forms.value : data)
      this.editRecordId = null;
    } else {
     const id = Date.now(); 

     const data = {
       id,
       ...this.Forms.value
     }
     this.formData.push(data)
    }

  this.Forms.reset();
  }
}

