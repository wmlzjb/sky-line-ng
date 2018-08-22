import * as login from '../actions/login';

export interface State {
    isLogin: boolean;
    isLoading: boolean;
    isError: boolean;
    userInfo: any;
}
const initialState: State = {
    isLogin: false,
    isLoading: false,
    isError: false,
    userInfo: null
};
export function reducer(state = initialState, action: login.Actions): State {
    switch (action.type) {
        case login.LOGIN_PADDING:
            return Object.assign({}, state, {
                isLoading: true,
                isLogin: false
            });
        case login.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLogin: true,
                isLoading: false
            });
        case login.LOGIN_ERROR:
            return Object.assign({}, state, {
                isError: true,
                isLogin: false,
                isLoading: false
            });

        default:
            return state;
    }
}

export const getLogin = (state: State) => state;
