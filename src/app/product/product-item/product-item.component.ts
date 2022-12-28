import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../model/product';
import { UpdateProduct } from '../../dto/update-product';
import { ProductService } from '../product.service';

import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() public product: Product;
  public classes: any;

  constructor(
    public productService: ProductService
  ) { }

  async ngOnInit(): Promise<void> {
    this.classes = {
      onSale: false,
    }
  }

  onSubmit(): void {
  }
}
