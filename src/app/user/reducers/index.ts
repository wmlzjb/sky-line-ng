import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromLoginPage from './login-page.reducer';
import * as fromLogin from './login.reducer';
import * as fromRoot from '../../reducers';
import { LoginActions } from '../actions/login';

export interface LoginState {
    status: fromLogin.State;
    loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
    login: LoginState;
}

export const reducers: ActionReducerMap<LoginState, LoginActions> = {
    status: fromLogin.reducer,
    loginPage: fromLoginPage.reducer,
};

export const selectLoginState = createFeatureSelector<State, LoginState>('login');

export const selectLoginStatusState = createSelector(
    selectLoginState,
    (state: LoginState) => state.status
);
export const getUser = createSelector(selectLoginStatusState, fromLogin.getUser);
export const getLoggedIn = createSelector(getUser, user => !!user);

export const selectLoginPageState = createSelector(
    selectLoginState,
    (state: LoginState) => state.loginPage
);
export const getLoginPageError = createSelector(
    selectLoginPageState,
    fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
    selectLoginPageState,
    fromLoginPage.getPending
);
