import { createAction, props } from '@ngrx/store';
import { ShoppingCartProduct } from 'src/app/model/shopping-cart-product.interface';

export const getAllShoppingCartProducts = createAction(
    '[ShoppingCart Component] GetAllShoppingCartProducts',
    //props<{ productId: number }>(),
);
export const getAllShoppingCartProductsSuccess = createAction(
    '[ShoppingCart Component] GetAllShoppingCartProductsSuccess',
    props<{ payload: ShoppingCartProduct[]}>(),
)

export const getAllShoppingCartProductsFailure = createAction(
    '[ShoppingCart Component] GetAllShoppingCartProductsFailure',
    props<{ error: any }>(),
)
export const addProduct = createAction(
    '[ShoppingCart Component] AddProduct',
    props<{payload: ShoppingCartProduct}>()
);
export const removeProduct = createAction(
    '[ShoppingCart Component] RemoveProduct'
);
export const reset = createAction(
    '[ShoppingCart Component] Reset'
);

export const updateShoppingCartProduct = createAction(
    '[ShoppingCart Component] updateShoppingCartProduct',
    props<{ payload: ShoppingCartProduct }>()
);

export const updateShoppingCartProductSuccess = createAction(
    '[ShoppingCart Component] updateShoppingCartProductSuccess',
    props<{ payload: ShoppingCartProduct }>(),
);

export const updateShoppingCartproductFailure = createAction(
    '[ShoppingCart Component] updateShoppingCartProductFailure',
    props<{ error: any }>(),
);

// other ways: https://levelup.gitconnected.com/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc
// https://blog.logrocket.com/angular-state-management-made-simple-with-ngrx/