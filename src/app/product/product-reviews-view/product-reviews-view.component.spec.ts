import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewsViewComponent } from './product-reviews-view.component';

describe('ProductReviewsViewComponent', () => {
  let component: ProductReviewsViewComponent;
  let fixture: ComponentFixture<ProductReviewsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
