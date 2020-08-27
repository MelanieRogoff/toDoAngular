import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remove-row-reactive-form',
  templateUrl: './remove-row-reactive-form.component.html',
  styleUrls: ['./remove-row-reactive-form.component.scss']
})
export class RemoveRowReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 
    
    this.checkoutForm = formBuilder.group({
      emailAddr: ['', [Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['5'],
          itemName: ['Pancakes'],
          itemDescription: ['Banana Pancakes'],
          itemsDone: ['', Validators.requiredTrue]
        }),
      ])
    });
  }

  checkoutForm: FormGroup;

  ngOnInit(): void {
  }

  get items() { //this will allow us to use functions such as push(), pop() since it'll turn this into a Form Array
    return this.checkoutForm.get('items') as FormArray; //this returns all of the items as a Form Array
  }

  addNewItem() { //when a user clicks on add new row, a new element will be inserted into the Form Array titled items
    const itemLength = this.items.length; //FIRST, grab the length of the items 
    
    const newItem = this.formBuilder.group({ //Then create a new FormGroup
      itemId: [itemLength + 1], //doing this so that it's dynamic
      itemName: [''],
      itemDescription: [''],
      itemsDone: ['', Validators.requiredTrue],
    });

    this.items.push(newItem); //we then push this new array INTO the items Form Array
  }

  postData() {
    console.log(this.checkoutForm);
  }

  removeItem(index) {
    const arr = this.items.length; 
    this.items.removeAt(index);
  }
}
