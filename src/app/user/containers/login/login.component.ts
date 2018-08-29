import { LoginModel } from './../../models/user';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromLogin from '../../reducers';
import * as login from '../../actions/login';
import { slideToRight } from '../../../animations/animation';

@Component({
    selector: 'app-user-new-ui-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [slideToRight]
})

export class LoginComponent implements OnInit, OnDestroy {
    @HostBinding('@routerAnimate') state;
    // private loginStateSubscription: Subscription;
    pending$ = this.store.pipe(select(fromLogin.getLoginPagePending));
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

    }
    ngOnDestroy() {
        // this.loginStateSubscription.unsubscribe();
    }
    login() {
        const model: LoginModel = { accountOrPhoneNumber: this.userName, password: this.password };
        this.store.dispatch(new login.LoginPendingAction(model));
    }
}
