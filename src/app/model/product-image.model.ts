import { Image } from "./image.model";

export interface ProductImage extends Image {
    isMain: boolean,
}