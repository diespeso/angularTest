import { Component, Input, OnInit } from '@angular/core';
import { ProductReview } from 'src/app/model/product-review.model';
import { Image } from 'src/app/model/image.model';

@Component({
  selector: 'app-product-review-item',
  templateUrl: './product-review-item.component.html',
  styleUrls: ['./product-review-item.component.css']
})
export class ProductReviewItemComponent implements OnInit {

  @Input() public review: ProductReview;

  constructor() { }

  ngOnInit(): void {
  }

}
