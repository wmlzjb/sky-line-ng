import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
    catchError,
    map,
    exhaustMap,
    tap
} from 'rxjs/operators';
import { LoginActionTypes, LoginPendingAction, LoginErrorAction, LoginSuccessAction } from '../actions/login';
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
            ofType<LoginPendingAction>(LoginActionTypes.LOGIN_PENDING),
            map(action => action.payload),
            exhaustMap(val => {
                return this.userService.login(val).pipe(
                    map(user => new LoginSuccessAction({ user })),
                    catchError(error => of(new LoginErrorAction(error.message)))
                );
            })
        );

    @Effect({ dispatch: false })
    navigatDashboard$: Observable<Action> =
        this.actions$.pipe(
            ofType<LoginSuccessAction>(LoginActionTypes.LOGIN_SUCCESS),
            tap(() => {
                this.router.navigate(['/dashboard']);
            })
        );

    @Effect({ dispatch: false })
    loginRedirect$ = this.actions$.pipe(
        ofType(LoginActionTypes.LOGIN_Redirect, LoginActionTypes.LOGIN_OUT),
        tap(login => {
            this.router.navigate(['/login']);
        })
    );
}
