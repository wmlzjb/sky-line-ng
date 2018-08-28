import { LoginModel } from './../../models/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
// import { Observable, Subscription } from 'rxjs';

import * as fromLogin from '../../reducers';
import * as login from '../../actions/login';

@Component({
    selector: 'app-user-new-ui-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
    // private loginStateSubscription: Subscription;
    pending$ = this.store.pipe(select(fromLogin.getLoginPagePending));
    pending = false;
    error$ = this.store.pipe(select(fromLogin.getLoginPageError));
    userName = '';
    password = '';
    constructor(
        private router: Router,
        private store: Store<fromLogin.State>
    ) {
        // this.login$ = store.select('login');
    }

    ngOnInit() {
        this.pending$.subscribe(pending => {
            this.pending = pending;
        });
    }
    ngOnDestroy() {
        // this.loginStateSubscription.unsubscribe();
    }

    login() {
        const model: LoginModel = { accountOrPhoneNumber: this.userName, password: this.password };
        this.store.dispatch(new login.LoginPendingAction(model));
    }
}
