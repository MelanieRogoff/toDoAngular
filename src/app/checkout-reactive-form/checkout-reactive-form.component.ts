import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout-reactive-form',
  templateUrl: './checkout-reactive-form.component.html',
  styleUrls: ['./checkout-reactive-form.component.scss']
})
export class CheckoutReactiveFormComponent implements OnInit  {

  checkoutForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { 

    this.checkoutForm = formBuilder.group({
      emailAddr: ['', [Validators.minLength(5),  Validators.maxLength(10), Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.checkoutForm.setValue({ //using setValue() to set values for the entire form
      emailAddr: 'test@test.com',
      quantity: 10,
      terms: true
    })

    this.checkoutForm.patchValue({ //using patchValue() to pass a value
      terms: false //this unchecks the checkbox
    })
  }

  postData() {
    console.log(this.checkoutForm.value, 'value of all formcontrols');
    this.resetForm();
  }

  resetForm() {
    this.checkoutForm.reset(); 
  }
}
