import { Action } from '@ngrx/store';

export const LOGIN_PADDING = '[Login] padding';
export const LOGIN_SUCCESS = '[Login] success';
export const LOGIN_ERROR = '[Login] error';

export class LoginPaddingAction implements Action {
    readonly type = LOGIN_PADDING;
    constructor(public payload: any) { }
}
export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) { }
}
export class LoginErrorAction implements Action {
    readonly type = LOGIN_ERROR;

    constructor(public payload: string) { }
}


export type Actions
    = LoginPaddingAction
    | LoginSuccessAction
    | LoginErrorAction;