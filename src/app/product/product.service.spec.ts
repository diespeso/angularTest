import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { catchError, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  const url = 'http://localhost:8030';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('http requests', () => {
    it('should test', async () => {

      service.getProductos().subscribe((res) => {
        expect(res).toBe([]);
      })

      const req = httpTestingController.expectOne({
        method: 'GET',
        url: `${url}/api/v1/productos`,
      });

      req.flush([])

    })
  });
});
