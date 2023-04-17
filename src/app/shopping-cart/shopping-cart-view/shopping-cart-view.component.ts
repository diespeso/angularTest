import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/model/shopping-cart.model';
import { concat } from 'rxjs';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IApiResponse, ProductService } from 'src/app/product/product.service';
import { ProductReviewService } from 'src/app/product/product-review.service';
import { IProductImage } from 'src/app/model/product.interface';

import { ShoppingCartProduct } from 'src/app/model/shopping-cart-product.interface';
import { selectShoppingCart } from 'src/app/store/selectors/shopping-cart.selectors';
import { AppState } from 'src/app/store/selectors/shopping-cart.selectors';
import { Store, select } from '@ngrx/store';
import * as actions from 'src/app/store/actions/shopping-cart.action';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent implements OnInit {

  public shoppingCartProducts: ShoppingCartProduct[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService, // maybe do this on the shopping cart service? TODO 
    private productReviewService: ProductReviewService,
    private store: Store<AppState>,
    ) {
    this.shoppingCartProducts = [];
  }

  ngOnInit(): void {
     this.store.dispatch(actions.getAllShoppingCartProducts());
      this.store.select(selectShoppingCart).subscribe((state) => {
        this.shoppingCartProducts = state;
      });
  }

  loadReviewStats(): void {
    this.shoppingCartProducts.forEach(({ product }: ShoppingCartProduct, index: number) => {
      this.productReviewService.getProductReviews(product.id!).subscribe({
        next: (res: IApiResponse) => {
          this.shoppingCartProducts[index].scoreAverage = res.info.average;
        },
      });
    });
  }

}
