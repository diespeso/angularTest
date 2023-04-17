import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductImage } from 'src/app/model/product-image.model';

import { Product } from 'src/app/model/product';
import { ProductService } from '../product.service';
import { DialogAddedProductComponent } from 'src/app/shopping-cart/dialog-added-product/dialog-added-product.component';

import { Store, select } from '@ngrx/store';
import { AppState, selectShoppingCart } from 'src/app/store/selectors/shopping-cart.selectors';
import { createShoppingCartProduct } from 'src/app/store/actions/shopping-cart.action';

import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public product: Product;
  public productImages: ProductImage[];
  public mainProductImage: ProductImage;
  public productReviewsAverage: number;
  public productReviewsCount: number;

  public maxSelectableAmount: number;
  public ngSelect: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store: Store<AppState>,
    private localStorageService: LocalstorageService,
    ) {
      this.maxSelectableAmount = 30;
      this.ngSelect = 1;
    }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((paramObj) => {
      const id: number = paramObj['id'];
      if (id) {
        this.productService.getProducto(id).subscribe({
          next: (res) => {
            this.product = res;
          },
          error: (err) => {
            console.log('error: ', err);
          },
        });
        this.productService.getProductoImages(id).subscribe({
          next: (res: ProductImage[]) => {
            this.productImages = res;
            this.mainProductImage = this.productImages.find(productImage => productImage.isMain)!;
          },
          error: (err) => {
            console.log('error: ', err);
          }
        })
      }
    });
  }

  handleChangeMainImageDisplay(event: Event): void {
    const selectedId: number = parseInt((event.target as HTMLImageElement).id, 10);
    console.log('event: ', (event.target as HTMLImageElement)); // TODO: estudiar este caso de casting
    // de un objeto a una interfaz (para product image y eso)
    this.mainProductImage = this.productImages[selectedId];
  }

  handleAddToCart(event: Event): void {
    console.log('im adding this to a cart"!');
    this.store.dispatch(createShoppingCartProduct({ payload: { product_id: this.product.id!, amount: this.ngSelect }}));
  }

  openAddedShoppingCartDialog() {    
    /*const dialogRef = this.dialog.open(DialogAddedProductComponent);
    dialogRef.componentInstance.success = true; // TODO: good point to start using rxjs (the other one for states)

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('ended');
    });*/
  }

  canAddToShoppingCart(): boolean {
    const exists = this.localStorageService.getProductFromShoppingCartByProductId(this.product.id!);
    return  exists === undefined;
  }

}
