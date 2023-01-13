import { Injectable } from '@angular/core';

import { ShoppingCartProduct } from '../model/shopping-cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(
  ) {

  }

  setShoppingCart(shoppingCartProducts: ShoppingCartProduct[]) {
    console.log('enters here', shoppingCartProducts);
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartProducts));
  }

  addShoppingtCartProduct(shoppingCartProduct: ShoppingCartProduct) {
    const currentShoppingCart: ShoppingCartProduct[] = JSON.parse(localStorage.getItem('shopping-cart')!);
    currentShoppingCart.push(shoppingCartProduct);
    localStorage.setItem('shopping-cart', JSON.stringify(currentShoppingCart));
  }

  updateShoppingcartProduct(shoppingCartProduct: ShoppingCartProduct) {
    const currentShoppingCart: ShoppingCartProduct[] = JSON.parse(localStorage.getItem('shopping-cart')!);
    localStorage.setItem('shopping-cart', JSON.stringify(currentShoppingCart.map(
      (current: ShoppingCartProduct) => {
        if (current.id === shoppingCartProduct.id) {
          return { ...shoppingCartProduct, product: current.product, scoreAverage: current.scoreAverage };
        }
        return current;
      }
    )));
  }

  removeShoppingCartProduct(shoppingCartProduct: ShoppingCartProduct) {
    const currentShoppingCart: ShoppingCartProduct[] = JSON.parse(localStorage.getItem('shopping-cart')!);
    localStorage.setItem('shopping-cart', JSON.stringify(currentShoppingCart.flatMap(
      (product: ShoppingCartProduct) => {
        if (product.id === shoppingCartProduct.id) {
          return [];
        }
        return product;
      }
    )));
  }

  getShoppingCart(): ShoppingCartProduct[] {
    return JSON.parse(localStorage.getItem('shopping-cart')!);
  }

  getProductFromShoppingCartByProductId(product_id: number): ShoppingCartProduct | undefined {
    const currentShoppingCart: ShoppingCartProduct[] = JSON.parse(localStorage.getItem('shopping-cart')!);
    return currentShoppingCart.find((shoppingProduct) => shoppingProduct.product_id === product_id); 
  }
}
