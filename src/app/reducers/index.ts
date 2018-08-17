import { createSelector } from 'reselect';
import { ActionReducer, combineReducers, ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromLogin from './login';
import { environment } from '../../environments/environment';

export interface State {
    login: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
    login: fromLogin.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];

// login
export const getLoginState = (state: State) => state.login;
export const getLoading = createSelector(getLoginState, fromLogin.getLoading);
