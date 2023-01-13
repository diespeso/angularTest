import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, reduce, tap, shareReplay } from 'rxjs/operators';
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { ProductReviewService } from "src/app/product/product-review.service";
import { ProductService } from "src/app/product/product.service";
import { ShoppingCart } from "src/app/model/shopping-cart.model";
import {
    getAllShoppingCartProducts,
    getAllShoppingCartProductsSuccess,
    getAllShoppingCartProductsFailure,
    updateShoppingCartProduct,
    updateShoppingCartProductSuccess,
    deleteShoppingCartProduct,
    deleteShoppingCartProductSuccess,
    deleteShoppingCartProductFailure,
    createShoppingCartProduct,
    createShoppingCartProductFailure,
    createShoppingCartProductSuccess
} from "src/app/store/actions/shopping-cart.action";
import { IApiResponse } from "src/app/product/product.service";
import { ShoppingCartProduct } from "src/app/model/shopping-cart-product.interface";
import { IProductImage } from "src/app/model/product.interface";
// https://dev.to/this-is-angular/ngrx-tips-i-needed-in-the-beginning-4hno
// https://eliteionic.com/tutorials/using-ngrx-effects-for-data-loading-in-an-ionic-angular-application/

import { MatSnackBar } from "@angular/material/snack-bar";

import { LocalstorageService } from "src/app/services/localstorage.service";

@Injectable()
export class ShoppingCartEffects {

    constructor(
        private actions$: Actions,
        private shoppingCartService: ShoppingCartService,
        private productReviewService: ProductReviewService,
        private productService: ProductService,
        private snackBar: MatSnackBar,
        private localStorageService: LocalstorageService,
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
                this.localStorageService.setShoppingCart(payload);
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
                    this.localStorageService.updateShoppingcartProduct(action.payload);
                    return updateShoppingCartProductSuccess({ payload: resShoppingCartProduct });
                }))
        })
    ));

    deleteShoppingCart$ = createEffect(() => this.actions$.pipe(
        ofType(deleteShoppingCartProduct),
        mergeMap((action) => {
            return this.shoppingCartService.deleteShoppingCartProduct(action.payload)
                .pipe(map((res: IApiResponse) => {
                    this.localStorageService.removeShoppingCartProduct(action.payload);
                    return deleteShoppingCartProductSuccess({ payload: action.payload });
                }),
                catchError((error: Error) => {
                    return of(deleteShoppingCartProductFailure({ error })).pipe(
                        tap((val: any) => {
                            this.snackBar.open('failed to delete shopping cart product', undefined, {
                                horizontalPosition: 'center',
                                verticalPosition: 'top',
                                duration: 2000,
                            });
                        })
                    );
                }))
        }),
    ));

    addShoppingCartProduct$ = createEffect(() => this.actions$.pipe(
        ofType(createShoppingCartProduct),
        mergeMap((action) => {
            return this.shoppingCartService.postShoppingCartProduct(action.payload)
                .pipe(map((res: ShoppingCartProduct) => {
                    this.snackBar.open('added product to shopping cart', undefined, {
                        horizontalPosition: 'center',
                        verticalPosition: 'top',
                        duration: 2000,
                    });
                    this.localStorageService.addShoppingtCartProduct(res);
                    return createShoppingCartProductSuccess({ payload: res });
                }),
                catchError((error: Error) => {
                    return of(createShoppingCartProductFailure({ error }));
                }),
            )
        })
    ));
}