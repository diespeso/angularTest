import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../model/product';
import { UpdateProduct } from '../../dto/update-product';
import { ProductService } from '../product.service';

import { lastValueFrom } from 'rxjs';
import { IAnyProduct, IProductImage } from 'src/app/model/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() public product: IProductImage;
  public classes: any;

  constructor(
    public productService: ProductService
  ) { }

  async ngOnInit(): Promise<void> {
    this.classes = {
      onSale: false,
    }
    console.log('testing inside: ', this.product);
  }

  onSubmit(): void {
  }
}
