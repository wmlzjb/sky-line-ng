import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as LoginActions from '../../user/actions/login';
import * as fromLogin from '../../user/reducers';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private store: Store<fromLogin.State>) { }

    canActivate(): Observable<boolean> {
        return this.store.pipe(
            select(fromLogin.getLoggedIn),
            map(authed => {
                if (!authed) {
                    this.store.dispatch(new LoginActions.LoginRedirectAction());
                    return false;
                }

                return true;
            }),
            take(1)
        );
    }
}
