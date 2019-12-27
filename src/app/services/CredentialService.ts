import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { ICredential } from '../models/ICredential';

@Injectable({
    providedIn: 'root'
})
export class CredentialService {
    private _url = 'http://localhost:3000/credentials';

    constructor(private http: HttpClient) { }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getCredentials(): Observable<ICredential[]> {
        return this.http.get<ICredential[]>(this._url);
    }

    errorHanlder(err) {
        console.log(err);
        return throwError(err);
    }
}