import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShoppingCart } from '../model/shopping-cart.model';
import { IApiResponse } from '../product/product.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private apiURL: string = `${environment.apiURL}/shopping-carts`;

  constructor(
    private http: HttpClient,
  ) { }

  getShoppingCart(): Observable<ShoppingCart[]> {
    return this.http.get<IApiResponse>(this.apiURL)
      .pipe(map((val) => val.data));
  }
}
