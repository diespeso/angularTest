import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShoppingCart } from '../model/shopping-cart.model';
import { IApiResponse } from '../product/product.service';
import { map } from 'rxjs/operators';

import { ShoppingCartProduct } from '../model/shopping-cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private apiURL: string = `${environment.apiURL}/shopping-carts`;

  constructor(
    private http: HttpClient,
  ) { }

  getShoppingCart(): Observable<ShoppingCart[]> {
    return this.http.get<IApiResponse<ShoppingCart[]>>(this.apiURL)
      .pipe(map((val) => val.data));
  }

  updateShoppingCartProduct(shoppingCartProduct: ShoppingCartProduct): Observable<ShoppingCartProduct> {
    return this.http.patch<IApiResponse<ShoppingCartProduct>>(`${this.apiURL}/${shoppingCartProduct.id}`, shoppingCartProduct)
      .pipe(map((res: IApiResponse<ShoppingCartProduct>) => {
        return res.data;
      }));
  }
}
