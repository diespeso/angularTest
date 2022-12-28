import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(null, 'image.jpg', 'productName', 0.0, false, 0)).toBeTruthy();
  });
});
