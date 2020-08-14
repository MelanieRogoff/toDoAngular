import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-tutorial',
  templateUrl: './pipes-tutorial.component.html',
  styleUrls: ['./pipes-tutorial.component.scss']
})
export class PipesTutorialComponent {

  user = {
    userId: 20,
    firstName: 'Example',
    lastName: 'Tutorial',
    DOB: '10/10/1010',
    salary: 123000
  };

  user2 = {
    userId: 20,
    firstName: 'Second',
    lastName: 'Name',
    DOB: '10/01/1010',
    salary: 12.45
  };
}
