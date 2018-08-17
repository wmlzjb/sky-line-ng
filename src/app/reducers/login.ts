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
            return {
                isLogin: false,
                isLoading: true
            };
        case login.LOGIN_SUCCESS:
            return {
                isLogin: true,
                isLoading: false
            };
        case login.LOGIN_ERROR:
            return {
                isLogin: false,
                isLoading: false
            };

        default:
            return state;
    }
}
