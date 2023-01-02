import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductImage } from 'src/app/model/product-image.model';

import { Product } from 'src/app/model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public product: Product;
  public productImages: ProductImage[];
  public productReviewsAverage: number;
  public productReviewsCount: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramObj) => {
      const id: number = paramObj['id'];
      if (id) {
        this.productService.getProducto(id).subscribe({
          next: (res) => {
            this.product = res;
          },
          error: (err) => {
            console.log('error: ', err);
          },
        });

        this.productService.getProductoImages(id).subscribe({
          next: (res) => {
            this.productImages = res;
            console.log('here images:', this.productImages);
          },
          error: (err) => {
            console.log('error: ', err);
          }
        })
      }
    });
  }

}
