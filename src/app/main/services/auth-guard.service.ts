import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import * as LoginActions from '../../user/actions/login';
import * as fromLogin from '../../user/reducers';
import { environment } from '../../../environments/environment';
import { UserService } from '../../api/user/user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store<fromLogin.State>,
        private cookieService: CookieService,
        private userService: UserService
    ) { }

    canActivate(): Observable<boolean> {
        // return this.store.pipe(
        //     select(fromLogin.getLoggedIn),
        //     map(authed => {
        //         if (!authed) {
        //             this.store.dispatch(new LoginActions.LoginRedirectAction());
        //             return false;
        //         }

        //         return true;
        //     }),
        //     take(1)
        // );

        const token = this.cookieService.get(environment.accessToken);
        if (!token) {
            this.store.dispatch(new LoginActions.LoginRedirectAction());
            return of(false);
        }
        this.store.dispatch(new LoginActions.LoginTokenAction(token));
        return of(true);
    }
}
