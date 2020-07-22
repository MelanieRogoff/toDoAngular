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

  user2 = [
    { 
      userId: 10, 
      'firstName': 'Jenny'
    },
    { 
      userId: 4, 
      'firstName': 'Johnny'
    },
    { 
      userId: 2, 
      'firstName': 'Matt'
    },
    { 
      userId: 55, 
      'firstName': 'Michael'
    },
    { 
      userId: 3, 
      'firstName': 'Ken'
    },
    { 
      userId: 53, 
      'firstName': 'Harry'
    },
    { 
      userId: 7, 
      'firstName': 'Perry'
    },

  ]

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
