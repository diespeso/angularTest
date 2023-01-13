import { createReducer, on } from '@ngrx/store';
import {
    addProduct, removeProduct, reset, getAllShoppingCartProductsSuccess,
    updateShoppingCartProduct, updateShoppingCartProductSuccess,
    deleteShoppingCartProduct, deleteShoppingCartProductSuccess,
} from '../actions/shopping-cart.action';

import { ShoppingCartProduct } from 'src/app/model/shopping-cart-product.interface';

export const initialState: ShoppingCartProduct[] = [];

export const shoppingCartReducer = createReducer(
    initialState,
    on(addProduct, (state, { payload }) => [...state, payload ]),
    on(getAllShoppingCartProductsSuccess, (state, { payload }) => payload),
    on(updateShoppingCartProductSuccess, (state, { payload }) => {
        return state.map((val: ShoppingCartProduct) => {
            if (val.id === payload.id) {
                return { ...payload, product: val.product, scoreAverage: val.scoreAverage };
            }
            return val;
        });
    }),
    on(deleteShoppingCartProductSuccess, (state, { payload }) => {
        return state.flatMap((val: ShoppingCartProduct) => {
            if(val.id === payload.id) {
                return [];
            }
            return val;
        });
    }),
);