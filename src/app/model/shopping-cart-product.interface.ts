import { IProductImage } from "./product.interface";
import { ShoppingCart } from "./shopping-cart.model";

export interface ShoppingCartProduct extends ShoppingCart {
    product: IProductImage,
    scoreAverage: number,
};