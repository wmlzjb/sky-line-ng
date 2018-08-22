import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromLogin from './login.reducer';
import * as fromRoot from '../../reducers';

export interface LoginState {
    login: fromLogin.State;
}

export interface State extends fromRoot.State {
    login: LoginState;
}

export const reducers: ActionReducerMap<LoginState> = {
    login: fromLogin.reducer,
};

export const getLoginState = createFeatureSelector<State, fromLogin.State>('login');
export const getLogin = createSelector(getLoginState, fromLogin.getLogin);
