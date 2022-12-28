import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProductos().subscribe(
      (data: Product[]) => {
        this.productList = data;
      }
    );
  }

  addProduct(product: Product): void {
    this.productList.push(product);
  }

}
