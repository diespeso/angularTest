import { createSelector } from "@ngrx/store";
import { initialState } from "../reducers/shopping-cart.reducer";
import { ShoppingCartProduct } from "src/app/model/shopping-cart-product.interface";

export interface AppState {
    shoppingCart: ShoppingCartProduct[],
};

export const selectShoppingCart = (state: AppState) => state.shoppingCart;