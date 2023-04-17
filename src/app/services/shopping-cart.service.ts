import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  getFullShoppingCart(): Observable<ShoppingCartProduct[]> {
    return this.http.get<IApiResponse<ShoppingCartProduct[]>>(`${this.apiURL}?full=true`)
      .pipe(map((val) => val.data.map((val: ShoppingCartProduct) => (val))))
  }

  updateShoppingCartProduct(shoppingCartProduct: ShoppingCartProduct): Observable<ShoppingCartProduct> { //TODO: adaptar front
    return this.http.patch<IApiResponse<ShoppingCartProduct>>(`${this.apiURL}/${shoppingCartProduct.id}`, shoppingCartProduct)
      .pipe(map((res: IApiResponse<ShoppingCartProduct>) => {
        return res.data;
      }));
  }

  deleteShoppingCartProduct(shoppingCartProduct: ShoppingCartProduct): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(`${this.apiURL}/${shoppingCartProduct.id}`, { observe: 'response' })
      .pipe(map((res: HttpResponse<IApiResponse>) => {
        console.log(res.status);
        if (res.status !== 200) {
          throw new Error('failed to delete shopping cart product!');
        }
        console.log('didnt fail');
        return res.body as IApiResponse;
      }));
  }

  postShoppingCartProduct(shoppingCartProduct: { product_id: number, amount: number }): Observable<ShoppingCartProduct> {
    return this.http.post<IApiResponse>(this.apiURL, shoppingCartProduct)
      .pipe(map((res: IApiResponse) => res.data));
  }
}
