import { Component, Input, OnInit } from '@angular/core';

import { ProductReviewService } from '../product-review.service';
import { ProductReview } from 'src/app/model/product-review.model';

@Component({
  selector: 'app-product-reviews-view',
  templateUrl: './product-reviews-view.component.html',
  styleUrls: ['./product-reviews-view.component.css']
})
export class ProductReviewsViewComponent implements OnInit {

  @Input() public productId: number;
  public reviews: ProductReview[];

  constructor(
    private productReviewService: ProductReviewService,
  ) { }

  ngOnInit(): void {
    this.productReviewService.getProductReviews(this.productId).subscribe({
      next: (res) => {
        console.log(res);
        this.reviews = res.data;
      },
      error: (err) => {
        console.log('error: ', err);
      },
    });
    
  }

}
