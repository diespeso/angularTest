import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../product/product.service';

import { LocalstorageService } from './localstorage.service';

type LoginCredentials = { email: string, password: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiLoginUrl: string = `${environment.apiURL}/login`;
  private apiSignUpUrl: string = `${environment.apiURL}/signup`;

  public token: string;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService,
  ) { }

  public login(credentials: LoginCredentials): Observable<null> {
    return this.http.post<IApiResponse>(this.apiLoginUrl, credentials)
      .pipe(map((res: IApiResponse) => {
        if (res.data?.token) {
          this.localStorageService.setJwt(res.data?.token);
          return null;
        }
        throw new Error('failed to login');
      }));
  }

  public signup(credentials: LoginCredentials & { name: string }): Observable<string|Error> {
    return this.http.post<IApiResponse>(this.apiSignUpUrl, credentials)
      .pipe(map((res: IApiResponse) => res.data.jwt ?? res.error)); // catch here
  }
}
