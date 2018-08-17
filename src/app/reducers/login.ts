import * as login from '../actions/login';

export interface State {
    isLogin: boolean;
    isLoading: boolean;
}
const initialState: State = {
    isLogin: false,
    isLoading: false
};
export function reducer(state = initialState, action: login.Actions): State {
    switch (action.type) {
        case login.LOGIN_PADDING:
            return Object.assign({}, state, {
                isLoading: true
            });
        case login.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLogin: true
            });
        case login.LOGIN_ERROR:
            return Object.assign({}, state);

        default:
            return state;
    }
}

export const getLoading = (state: State) => state.isLoading;
export const getLogin = (state: State) => state.isLogin;
