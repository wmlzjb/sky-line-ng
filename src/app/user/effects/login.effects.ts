import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
    catchError,
    map,
    switchMap,
    tap
} from 'rxjs/operators';
import * as loginActionTypes from '../actions/login';
import { UserService } from '../../api/user/user.service';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private userService: UserService
    ) { }
    @Effect()
    login$: Observable<Action> =
        this.actions$.pipe(
            ofType<loginActionTypes.LoginPaddingAction>(loginActionTypes.LOGIN_PADDING),
            map(action => action.payload),
            switchMap(val => {
                return this.userService.login(val).pipe(
                    map(user => new loginActionTypes.LoginSuccessAction(user)),
                    catchError(error => of(new loginActionTypes.LoginErrorAction(error.message)))
                );
            })
        );

    @Effect({ dispatch: false })
    navigatDashboard$: Observable<Action> =
        this.actions$.pipe(
            ofType<loginActionTypes.LoginSuccessAction>(loginActionTypes.LOGIN_SUCCESS),
            tap(() => {
                this.router.navigate(['/dashboard']);
            })
        );
}
