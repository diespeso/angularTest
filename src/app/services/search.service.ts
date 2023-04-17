import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiURL: string = `${environment.apiURL}/search`;

  constructor(
    private http: HttpClient,
  ) { }

  searchProductLikeName(likeName: string): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(this.apiURL, {
      params: {
        likeName,
      }
    })
      .pipe((response) => {
        return response;
      });
  }
}
