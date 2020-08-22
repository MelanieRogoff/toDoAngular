import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor() { }

  loginUser(signInForm: NgForm) {
    console.log(signInForm.value.emailAddress); //grabs the email address
  }

}
