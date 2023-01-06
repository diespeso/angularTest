import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { ProductImage } from '../model/product-image.model';
import { ReadProductImageFullDto } from '../dto/read-product-image-full';
import { IAnyProduct, IProductImage } from '../model/product.interface';

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

  getProductsWithImage(): Observable<IProductImage[]> {
    return this.http
      .get<IApiResponse>(`${this.apiURL}?with_main_image=true`)
      .pipe(map((val) => val.data));
  }

  getProducto(productId: number): Observable<Product> {
    return this.http
      .get<IApiResponse>(`${this.apiURL}/${productId}`)
      .pipe(map(val => val.data));
  }

  getProductoImages(productId: number): Observable<ProductImage[]> {
    console.log('getting product images: ', productId);
    return this.http
      .get<IApiResponse>(`${this.apiURL}/${productId}/images`)
      .pipe(map(val => ( // TODO: use a dto
        val.data.map((imageData: ReadProductImageFullDto) => (imageData)) 
      )));
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http
      .patch<IApiResponse>(
        `${this.apiURL}/${product.id}`,
        product,
      )
      .pipe(map((val => val.data)))
  }

  createProduct(product: Product): Observable<IAnyProduct> {
    return this.http
      .post<IApiResponse>(
        `${this.apiURL}`,
        product,
      )
      .pipe(map((val => val.data)));
  }
}
