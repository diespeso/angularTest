import { Component, OnInit } from '@angular/core';
import { IProductImage } from 'src/app/model/product.interface';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  public likeNameInput: string;

  public products: IProductImage[];

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log("testing here search");
    this.searchService.searchProductLikeName(this.likeNameInput)
      .subscribe((response) => {
        console.log('here works inside,', response);
        this.products = response.data;
      })
  }

}
