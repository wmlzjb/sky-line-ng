import { Action } from '@ngrx/store';

export const FORGOT_PADDING = '[register] padding';

export class ForgotPaddingAction implements Action {
    readonly type = FORGOT_PADDING;
    constructor(public payload: any) { }
}

export type Actions
    = ForgotPaddingAction;
