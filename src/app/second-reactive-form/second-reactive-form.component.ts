import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-reactive-form',
  templateUrl: './second-reactive-form.component.html',
  styleUrls: ['./second-reactive-form.component.scss']
})
export class SecondReactiveFormComponent implements OnInit {

  checkoutForm: FormGroup;
  itemsArr = FormArray;

  valueChangedTracked = '';


  constructor(private formBuilder: FormBuilder) { 
    this.checkoutForm = formBuilder.group({
      emailAddr: ['', [
                Validators.minLength(5),
                Validators.required,
                Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
    this.checkoutForm.get('emailAddr').valueChanges.subscribe(data => {
      this.valueChangedTracked = data;  //this allows us to see every change we make in the email input field 
    })

    //To read the entire form valueChange, do:
    // this.checkoutForm.valueChanges.subscribe(data => {
    //   console.log(data, 'formData');
    // })
  }

  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }


  addItemRow() {
    const newGroup = this.formBuilder.group({
      itemId: ['4'],
      itemName: ['5'],
      itemDesc: ['6'],
    });
    this.items.push(newGroup);
  }

  removeItem(index) {
    const arr = this.items.length; 
    this.items.removeAt(index);
  }
  
  postData() {
    console.log(this.checkoutForm);
  }

  resetForm() {
    this.checkoutForm.reset();
  }

}
