import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Credential } from '../models/Credential';

@Injectable({
    providedIn: 'root'
})
export class CredentialService {
    private url = 'http://localhost:3000/credentials';

    constructor(private http: HttpClient) { }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getCredentials(): Observable<Credential> {
        return this.http.get(this.url)
            .pipe(
                retry(1),
                catchError(this.errorHanlder)
            )
    }

    errorHanlder(err) {
        console.log(err);
        return throwError(err);
    }
}