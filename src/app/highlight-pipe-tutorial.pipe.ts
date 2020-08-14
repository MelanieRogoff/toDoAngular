import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlightPipeTutorial' 
  // this name is how we refer to the pipe in our app
})
export class HighlightPipeTutorialPipe implements PipeTransform {

  constructor ( private sanitizer: DomSanitizer ) {} //we are trying to bypass the natural DOM behavior of NOT highlighting in this particular instance by importing the DomSanitizer

  transform(value: string, cityCode: string): any { //then we pass params into transform(). 
    //here we are saying that the value is of type string, the parameter we pass in is city, which is a string, and it returns a type of any
    
    if (cityCode === 'NY' || cityCode === 'NJ') {
      //we then run the sanitizer's bypassSecurityTrustHtml function and pass in the div that contains the background highlighter we want, as well as the city name so that the city name is highlighted
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: pink">' + cityCode + '</div>');
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: lightgreen">' + cityCode + '</div>');
    }
  }
}
