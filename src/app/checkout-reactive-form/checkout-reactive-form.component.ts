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
      'emailAddr': ['', [
                          Validators.minLength(5), 
                          Validators.maxLength(10),
                          Validators.required, 
                          Validators.email
                            ]
                      ],
      'quantity': ['', Validators.required],
      'terms': ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  postData() {
    console.log(this.checkoutForm.value, 'value of all formcontrols');
  }
}
