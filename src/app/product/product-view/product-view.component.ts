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
  public mainProductImage: ProductImage;
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
        console.log('getting data for: ', id);
        this.productService.getProductoImages(id).subscribe({
          next: (res: ProductImage[]) => {
            this.productImages = res;
            this.mainProductImage = this.productImages.find(productImage => productImage.isMain)!;
            console.log('here images:', this.productImages);
          },
          error: (err) => {
            console.log('error: ', err);
          }
        })
      }
    });
  }

  handleChangeMainImageDisplay(event: Event): void {
    const selectedId: number = parseInt((event.target as HTMLImageElement).id, 10);
    console.log('event: ', (event.target as HTMLImageElement)); // TODO: estudiar este caso de casting
    // de un objeto a una interfaz (para product image y eso)
    this.mainProductImage = this.productImages[selectedId];
  }

}
