import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})

export class FormArrayComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 

    this.checkoutForm = formBuilder.group({
      emailAddr: ['', [Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['Pancakes'],
          itemDescription: ['Banana Pancakes'],
          itemsDone: ['', Validators.requiredTrue]
        })
      ])
    });




  }

  checkoutForm: FormGroup;
  valueChangedTracked = '';

  ngOnInit(): void {}

  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }

  postData() {
    console.log(this.checkoutForm);
  }

  removeItem(index) {
    const arr = this.items.length; 
    this.items.removeAt(index);
  }

  resetForm() {
    this.checkoutForm.reset();
  }

}
