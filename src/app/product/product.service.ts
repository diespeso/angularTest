import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';

export interface IApiResponse {
  data: any,
  error: boolean,
  info: any,
  message: string,
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL: string = `${environment.apiURL}/products`;
  constructor(
    private http: HttpClient,
  ) { }

  getProductos(): Observable<Product[]> {
    return this.http
      .get<IApiResponse>(this.apiURL)
      .pipe(map((val) => val.data));
  }

  getProducto(productId: number): Observable<Product> {
    console.log('productId', productId);
    return this.http
      .get<IApiResponse>(`${this.apiURL}/${productId}`)
      .pipe(map(val => val.data));
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http
      .patch<IApiResponse>(
        `${this.apiURL}/${product.id}`,
        product,
      )
      .pipe(map((val => val.data)))
  }

  createProduct(product: Product): Observable<Product> {
    return this.http
      .post<IApiResponse>(
        `${this.apiURL}`,
        product,
      )
      .pipe(map((val => val.data)));
  }
}
