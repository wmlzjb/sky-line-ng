import { Action } from '@ngrx/store';

export const REGISTER_PADDING = '[register] padding';
export const REGISTER_SUCCESS = '[register] success';
export const REGISTER_ERROR = '[register] error';

export class RegisterPaddingAction implements Action {
    readonly type = REGISTER_PADDING;
    constructor(public payload: any) { }
}

export class RegisterSuccessAction implements Action {
    readonly type = REGISTER_SUCCESS;
    constructor(public payload: any) { }
}

export class RegisterErrorAction implements Action {
    readonly type = REGISTER_ERROR;
    constructor(public payload: any) { }
}

export type Actions
    = RegisterPaddingAction
    | RegisterSuccessAction
    | RegisterErrorAction;
