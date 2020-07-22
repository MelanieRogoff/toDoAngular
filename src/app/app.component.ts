import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoAngular';

  showMsg = true;

  colorName = 'green';

  readMe() {
    console.log('hi');
  }
}
