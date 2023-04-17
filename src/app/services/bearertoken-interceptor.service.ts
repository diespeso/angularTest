import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class BearertokenInterceptorService implements HttpInterceptor {

  constructor(
    private localStorageService: LocalstorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwt = null;
    try {
      jwt = this.localStorageService.getJwt();
    } catch (e: any) {/* do something in the future? */}
    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`,
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }
}
