import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor( private contactsService: ContactsService) {}

   contactList: any;

  ngOnInit(): void {

    this.contactsService.getContacts().subscribe(data => {
      this.contactList = data;
    });
 //subscribing to the data we grab from our service, which grabs data from our db.json, and then we set that returned data to our contactList.
  }

}
