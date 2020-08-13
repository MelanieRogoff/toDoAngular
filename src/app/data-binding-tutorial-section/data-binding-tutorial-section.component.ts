import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-tutorial-section',
  templateUrl: './data-binding-tutorial-section.component.html',
  styleUrls: ['./data-binding-tutorial-section.component.scss']
})
export class DataBindingTutorialSectionComponent  {

  clsName = 'c1';

  colorVal = 'red';

  epNum = 17;

  hrefVal = 'https://google.com';

  logger() {
    console.log('Message here');
  }

  placeholderVal = 'Please enter a value';

  showAlert(id) {
    alert('ALERT ' + id);
  }

  subTitle = 'Interpolation';

  updatedLink = 'https://oracle.com';

  user = {
    userId: 201,
    userName: 'ABC',
    status: 'Active'
  }

}
