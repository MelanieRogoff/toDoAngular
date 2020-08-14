import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-example',
  templateUrl: './custom-pipe-example.component.html',
  styleUrls: ['./custom-pipe-example.component.scss']
})
export class CustomPipeExampleComponent {

  users = [
    {
      firstName: 'Mel',
      city: 'New York', 
      cityCode: 'NY'
    },
    {
      firstName: 'Michael',
      city: 'Los Angeles',
      cityCode: 'LA'
    },
    {
      firstName: 'Matt',
      city: 'Phoenix',
      cityCode: 'PHX'
    },
  ];
}
