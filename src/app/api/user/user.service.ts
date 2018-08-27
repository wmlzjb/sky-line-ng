import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
        const headers = new HttpHeaders()
            .set('X-Bmob-Application-Id', '75700841fb52cb6a078f861df2a5bbc3')
            .set('X-Bmob-REST-API-Key', '7d536b0f8e4fcda96529aee305e05439');
        const params = new HttpParams()
            .set('username', model.accountOrPhoneNumber)
            .set('password', model.password);
        return this.http.get<any>('https://api.bmob.cn/1/login', { headers: headers, params: params });
    }
    logout(): Observable<any> {
        return this.http.post(this.baseUrl + '/logout', null);
    }
    getCurrentUser = (): Observable<any> => {
        return this.http.get(this.baseUrl + '/current').pipe(map((x: any) => x.clinicAccounts[0]));
    }
}
