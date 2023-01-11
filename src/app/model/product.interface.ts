import { Image } from "./image.model";

export interface IProduct {
    id: number | null,
    name: string,
    description: string,
    price: number,
};

export interface IProductImage extends IProduct {
    image: Image,
};

export interface IAnyProduct extends IProduct, IProductImage {}