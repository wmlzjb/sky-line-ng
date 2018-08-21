import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers';
import * as login from '../../../actions/login';

@Component({
    selector: 'app-user-new-ui-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    isLoading$: Observable<boolean>;
    constructor(
        private router: Router,
        private store: Store<fromRoot.State>
    ) {
        this.isLoading$ = this.store.select(fromRoot.getLoading);
    }

    ngOnInit() {

    }

    login() {
        this.store.dispatch(new login.LoginPaddingAction());
    }
}
