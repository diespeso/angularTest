import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../product.service';
import { Product } from 'src/app/model/product';
import { Image } from 'src/app/model/image.model';
import { IProductImage } from 'src/app/model/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: IProductImage[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    /*this.productService.getProductos().subscribe(
      (data: Product[]) => {
        this.productList = data;
      }
    );*/
    this.productService.getProductsWithImage().subscribe(
      (data: IProductImage[]) => {
        this.productList = data;
      }
    )
  }

  addProduct(product: IProductImage): void {
    this.productList.push(product);
  }

}
