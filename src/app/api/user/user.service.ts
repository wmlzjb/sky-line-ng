import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    baseUrl = `${environment.apiWebUrl}/api/login`;

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }
    login(model: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, model);
    }
    logout(): Observable<any> {
        return this.http.post(this.baseUrl + '/logout', null);
    }
    getCurrentUser = (): Observable<any> => {
        return this.http.get(this.baseUrl + '/current').pipe(map((x: any) => x.clinicAccounts[0]));
    }
}
