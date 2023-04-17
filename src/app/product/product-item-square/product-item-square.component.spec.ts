import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemSquareComponent } from './product-item-square.component';

describe('ProductItemSquareComponent', () => {
  let component: ProductItemSquareComponent;
  let fixture: ComponentFixture<ProductItemSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
