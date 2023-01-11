import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartProduct } from 'src/app/model/shopping-cart-product.interface';
import { IProductImage } from 'src/app/model/product.interface';
@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {
  @Input() public shoppingCartProduct: ShoppingCartProduct;
  public imageProduct: IProductImage;

  public editAmount: number;
  public maxSelectableAmount: number;

  constructor() {
  }

  ngOnInit(): void {
    this.imageProduct = this.shoppingCartProduct.product;
    this.editAmount = this.shoppingCartProduct.amount;
    console.log(this.shoppingCartProduct.amount);
    this.maxSelectableAmount = 30;
  }

}
