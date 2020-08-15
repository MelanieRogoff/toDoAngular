import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  queryCountry = '';
  queryTag = '';
  queryTrending = 5;

  constructor( private activatedRoute: ActivatedRoute ) { 
    this.activatedRoute.queryParams.subscribe(data => {
      this.queryCountry = data.country; //setting it to whatever the country property of data is
      this.queryTag = data.tag;
      this.queryTrending = data.trending;
    })
  }
}
