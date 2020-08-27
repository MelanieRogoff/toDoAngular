import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;

  data: Observable<any>; //we need to capture the Observable
  data2: Observable<any>;

  constructor() { }

  ngOnInit(): void {

   this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('In progress'); //.next() means to send the next value
      }, 2000);

      setTimeout(() => {
        observer.next('Processing'); 
      }, 5000);

      setTimeout(() => {
        observer.next('Completed'); 
      }, 8000);

      //Setting an error if something has gone wrong
      setTimeout(() => {
        observer.error();
      }, 80000);

      //We want to stop this once the order is completed, so use complete()
      setTimeout(() => { 
        observer.complete();
      }, 12000);

      //If we were to have another setTimeout() right here, it wouldn't display
    });

    this.data.subscribe(val => { //this sets the orderStatus to the subscribed value
      this.orderStatus = val;
    });

    this.data.subscribe(val2 => { //this sets the orderStatus to the subscribed value
      console.log('Second Subscription');
    });
  }

}
