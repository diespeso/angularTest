import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartProduct } from 'src/app/model/shopping-cart-product.interface';
import { IProductImage } from 'src/app/model/product.interface';
import { MatSelectChange } from '@angular/material/select';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/selectors/shopping-cart.selectors';

import { updateShoppingCartProduct, deleteShoppingCartProduct } from 'src/app/store/actions/shopping-cart.action';

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

  constructor(
    private store: Store<AppState>,
  ) {
    console.log('score:', this.shoppingCartProduct);
  }

  ngOnInit(): void {
    this.imageProduct = this.shoppingCartProduct.product;
    console.log('printing inside product card:', this.shoppingCartProduct);
    this.editAmount = this.shoppingCartProduct.amount;
    this.maxSelectableAmount = 30;
  }

  onAmountSelectorChange(event: MatSelectChange): void {
    this.shoppingCartProduct = {
      ...this.shoppingCartProduct,
      amount: event.value,
    };
    this.store.dispatch(updateShoppingCartProduct({ payload: this.shoppingCartProduct }));
  }

  handleDeletion(event: Event): void {
    this.store.dispatch(deleteShoppingCartProduct({ payload: this.shoppingCartProduct }));
  }

}
