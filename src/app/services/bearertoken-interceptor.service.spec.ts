import { TestBed } from '@angular/core/testing';

import { BearertokenInterceptorService } from './bearertoken-interceptor.service';

describe('BearertokenInterceptorService', () => {
  let service: BearertokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearertokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
