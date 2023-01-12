import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, lastValueFrom, merge, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, reduce } from 'rxjs/operators';
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { ProductReviewService } from "src/app/product/product-review.service";
import { ProductService } from "src/app/product/product.service";
import { ShoppingCart } from "src/app/model/shopping-cart.model";
import {
    addProduct,
    getAllShoppingCartProducts,
    getAllShoppingCartProductsSuccess,
    getAllShoppingCartProductsFailure,
    updateShoppingCartProduct,
    updateShoppingCartProductSuccess,
} from "src/app/store/actions/shopping-cart.action";
import { IApiResponse } from "src/app/product/product.service";
import { ShoppingCartProduct } from "src/app/model/shopping-cart-product.interface";
import { IProductImage } from "src/app/model/product.interface";
import { Store } from "@ngrx/store";
import { AppState } from "../selectors/shopping-cart.selectors";
// https://dev.to/this-is-angular/ngrx-tips-i-needed-in-the-beginning-4hno
// https://eliteionic.com/tutorials/using-ngrx-effects-for-data-loading-in-an-ionic-angular-application/

@Injectable()
export class ShoppingCartEffects {

    constructor(
        private actions$: Actions,
        private shoppingCartService: ShoppingCartService,
        private productReviewService: ProductReviewService,
        private productService: ProductService,
        private store: Store<AppState>,
        ) {

        }
    
    getShoppingCart$ = createEffect(() => this.actions$.pipe(
        ofType(getAllShoppingCartProducts),
        mergeMap((action) => {
            return this.shoppingCartService.getShoppingCart()
            .pipe(mergeMap((shopppingCarts: ShoppingCart[]) => {
                return shopppingCarts.map((shoppingCart: ShoppingCart) => {
                    return shoppingCart;
                })
            }))
            .pipe(mergeMap((shoppingCart: ShoppingCart) => {
                return this.productService.getProductWithImage(shoppingCart.product_id).pipe(
                    mergeMap((product: IProductImage) => {
                        return this.productReviewService.getProductReviews(shoppingCart.product_id).pipe(
                            map((productReview: IApiResponse) => ({
                                    ...shoppingCart,
                                    product,
                                    scoreAverage: productReview.info.average,
                                }
                            ))
                        )
                    })
                )
            }))
            .pipe(reduce((prev: ShoppingCartProduct[], curr) => ([...prev, curr]), [] as ShoppingCartProduct[]))
            .pipe(map((payload: ShoppingCartProduct[]) => {
                return getAllShoppingCartProductsSuccess({ payload });
            }));
        }),
        catchError((error: any) => {
            return of(getAllShoppingCartProductsFailure({ error }));
        })
    ));

    updateShoppingCart$ = createEffect(() => this.actions$.pipe(
        ofType(updateShoppingCartProduct),
        mergeMap((action) => {
            return this.shoppingCartService.updateShoppingCartProduct(action.payload)
                .pipe(map((resShoppingCartProduct: ShoppingCartProduct) => {
                    return updateShoppingCartProductSuccess({ payload: resShoppingCartProduct });
                }))
        })
    ));
}