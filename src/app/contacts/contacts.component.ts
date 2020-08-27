import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor( private contactsService: ContactsService) {

   }

   contactList = []; //setting the contactList to an empty array prior to ngOnInit()

  ngOnInit(): void {
    this.contactList = this.contactsService.getContacts(); //here we are saying to set the contactList array to have the contacts we created in our getContacts() method in our contact service. 
    
  }

}
