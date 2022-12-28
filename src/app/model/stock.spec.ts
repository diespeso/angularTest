import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('stockName', 'codeString', 0, 0)).toBeTruthy();
  });
});
