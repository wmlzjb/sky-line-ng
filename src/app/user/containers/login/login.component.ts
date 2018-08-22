import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromLogin from '../../reducers/login.reducer';
import * as login from '../../actions/login';

@Component({
    selector: 'app-user-new-ui-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
    private loginStateSubscription: Subscription;
    login$: Observable<any>;
    loginPage: any = {};
    userName = '';
    password = '';
    constructor(
        private router: Router,
        private store: Store<fromLogin.State>
    ) {
        this.login$ = store.select('login');
    }

    ngOnInit() {
        this.loginStateSubscription = this.login$.subscribe(state => {
            this.loginPage = state.login;
        });
    }
    ngOnDestroy() {
        this.loginStateSubscription.unsubscribe();
    }

    login() {
        this.store.dispatch(new login.LoginPaddingAction({ accountOrPhoneNumber: this.userName, password: this.password }));
    }
}
