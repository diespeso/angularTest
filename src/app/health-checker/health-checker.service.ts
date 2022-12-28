import { Inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class HealthCheckerService {

    private apiURL: string = `${environment.apiURL}/health`
    constructor( private http: HttpClient) { }

    check(): Observable<string> {
        return this.http.get<{ data: string }>(this.apiURL)
            .pipe(map((response) => response.data));
    }
}