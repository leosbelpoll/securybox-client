import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICredential } from '../models/ICredential';

@Injectable({
    providedIn: 'root'
})
export class CredentialService {
    private _url = 'http://localhost:3000/credentials';

    constructor(private http: HttpClient) { }

    getCredentials(): Observable<ICredential[]> {
        return this.http.get<ICredential[]>(this._url);
    }
}