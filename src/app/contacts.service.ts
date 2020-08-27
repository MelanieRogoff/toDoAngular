import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts() {
    //HTTP calls usually happen here
    const contactList = [
      { contactId: 1, contactName: 'Ava', hobbies: 'Being a CEO' },
      { contactId: 2, contactName: 'Sara', hobbies: 'Dancing' },
      { contactId: 3, contactName: 'Gary', hobbies: 'Soccer' },
      { contactId: 4, contactName: 'Mick', hobbies: 'Scientific Journaling' },
    ];

    return contactList;
  }

}
