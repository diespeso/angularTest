import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Product } from 'src/app/model/product';
import { ProductService, IApiResponse } from '../product.service';

@Component({
  selector: 'app-product-item-new',
  templateUrl: './product-item-new.component.html',
  styleUrls: ['./product-item-new.component.css', '../product-item/product-item.component.css']
})
export class ProductItemNewComponent implements OnInit {

  private product: Product;

  public name: string;
  public price: number;

  @Output() newProductEvent: EventEmitter<Product>;

  constructor(private productService: ProductService) {
    this.newProductEvent = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSave(): void {
    const newProduct: Product = new Product(null, '', this.name, this.price);
    this.saveNewProduct(newProduct);
  }

  saveNewProduct(newProduct: Product): void {
    this.productService.createProduct(newProduct).subscribe({
      next: (product: Product) => {
        this.product = product; // update parent with this, usar output
        this.newProductEvent.emit(this.product);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

}
