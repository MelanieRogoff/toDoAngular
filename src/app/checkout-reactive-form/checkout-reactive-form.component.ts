import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-checkout-reactive-form',
  templateUrl: './checkout-reactive-form.component.html',
  styleUrls: ['./checkout-reactive-form.component.scss']
})
export class CheckoutReactiveFormComponent  {

  checkoutForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { 

    this.checkoutForm = formBuilder.group({
      'emailAddress': new FormControl(), 
      'quantity': new FormControl(),
      'terms': new FormControl()
    });
  }

  postData() {
    console.log(this.checkoutForm, 'checkoutForm');
  }
}
