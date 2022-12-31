import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ProductReview } from '../model/product-review.model';

import { IApiResponse } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  private apiURL = (productId: number, productReviewId?: number) => 
    (`${environment.apiURL}/products/${productId}/product-reviews/${productReviewId ?? ''}?average=true&count=true`);

  constructor(
    private http: HttpClient,
  ) { }

  getProductReviews(productId: number) {
    return this.http
      .get<IApiResponse>(this.apiURL(productId));
  }
}
