import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoAngular';

  showMsg = false;

  switchValue = 'three';

  colorName = 'green';

  users = [
    { 
      id: 1, 
      'name': 'John'
    }, 
    {
      id: 2, 
      'name': 'Jack'
    }
  ]

  readMe() {
    console.log('hi');
  }
}
