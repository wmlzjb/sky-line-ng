import { User, LoginModel } from './../models/user';
import { Action } from '@ngrx/store';

export enum LoginActionTypes {
    LOGIN_PENDING = '[Login] pending',
    LOGIN_SUCCESS = '[Login] success',
    LOGIN_ERROR = '[Login] error',
    LOGIN_OUT = '[Login] out',
    LOGIN_Redirect = '[Login] redirect',
    LOGIN_TOKEN = '[Login] token'
}

export class LoginPendingAction implements Action {
    readonly type = LoginActionTypes.LOGIN_PENDING;
    constructor(public payload: LoginModel) { }
}
export class LoginSuccessAction implements Action {
    readonly type = LoginActionTypes.LOGIN_SUCCESS;
    constructor(public payload: { user: User, token: string }) { }
}
export class LoginErrorAction implements Action {
    readonly type = LoginActionTypes.LOGIN_ERROR;
    constructor(public payload: any) { }
}
export class LoginRedirectAction implements Action {
    readonly type = LoginActionTypes.LOGIN_Redirect;
}
export class LogoutAction implements Action {
    readonly type = LoginActionTypes.LOGIN_OUT;
}
export class LoginTokenAction implements Action {
    readonly type = LoginActionTypes.LOGIN_TOKEN;
    constructor(public payload: any) { }
}

export type LoginActions
    = LoginPendingAction
    | LoginSuccessAction
    | LoginErrorAction
    | LoginRedirectAction
    | LogoutAction
    | LoginTokenAction;
