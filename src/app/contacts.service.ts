import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts() {//HTTP calls usually happen here -- we're linking to our contacts array in db.json
   //Headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
  
    return this.httpClient.get('http://localhost:3000/contacts');
  }
}
