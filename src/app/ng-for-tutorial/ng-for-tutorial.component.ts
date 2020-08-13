import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-tutorial',
  templateUrl: './ng-for-tutorial.component.html',
  styleUrls: ['./ng-for-tutorial.component.scss']
})
export class NgForTutorialComponent  {

  users = [
    { 
      id: 1, 
      'name': 'John'
    }, 
    {
      id: 2, 
      'name': 'Jack'
    }
  ];

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
      userId: 7, 
      'firstName': 'Perry'
    },
  ];
}
