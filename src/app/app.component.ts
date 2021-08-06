import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   editRecordId = null;
  formData = Array()
  title = 'Forms';
  @ViewChild('f')
  Forms!: NgForm;
  genders = ['male', 'female']
  user = {
    id: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
  }

  form = ['one', 'two', 'three'];
  selected = 'two'
  submitted = false;

onEdit(user: { [x: string]: any; id: any; }) {
  // destructure user object separate ID and rest of the fields
  // coz we didn't have ID field so to avoid error dont use ID
  const {id, ...data} = user

    // set edit record ID
  this.editRecordId = id;

  // set form value with selected user
  this.Forms.setValue(data)

}

onDelete(user: { id: any; }) {
    // filter out deleted entry from form data array matching
    // with the ID of deleted user record with ID from form data array
    this.formData = this.formData.filter((data) => data['id'] !== user.id)
}

  onSubmit() {
    this.submitted = true;

    if (this.editRecordId) {
      // check if already exist record in formData matches with the
      // edit reocrd id that means its edited record then return newly
      // submitted form value else return old formData record
      // and populate formData array.
      this.formData = this.formData.map((data) => data['name'] === this.editRecordId ? this.Forms.value : data)

      // rest edit record id to null again
      this.editRecordId = null;
    } else {
     // assigning unique ID to each record I used timestamp technically it would be database primary key ID
     const id = Date.now(); 

     const data = {
       id,
       ...this.Forms.value
     }
     this.formData.push(data as never)
    }
  
  
  this.Forms.reset();
  }
}
