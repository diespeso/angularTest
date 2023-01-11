import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddedProductComponent } from './dialog-added-product.component';

describe('DialogAddedProductComponent', () => {
  let component: DialogAddedProductComponent;
  let fixture: ComponentFixture<DialogAddedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
