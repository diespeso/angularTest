import { Image } from "./image.model";

export class ProductReview {
    constructor(
        public id: number | number,
        public title: string,
        public product_id: number,
        public content: string,
        public score: number,
        public images: Image[],
    ) {}
}