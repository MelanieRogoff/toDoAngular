import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent {

  queryParams = '';
  searchKeyword = '';

  productId = 0;

  constructor( private router: Router,
              private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(data => {
      this.searchKeyword = data.id;
    });
   }

   updateSearch() {
     const searchValue = this.searchKeyword;
     this.router.navigate(['product-id', searchValue]); //navigate to the product-id route with the specific keyword
   }

}
