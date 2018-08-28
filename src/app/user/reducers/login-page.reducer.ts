import { LoginActions, LoginActionTypes } from '../actions/login';

export interface State {
    error: string | null;
    pending: boolean;
}
const initialState: State = {
    error: null,
    pending: false,
};
export function reducer(state = initialState, action: LoginActions): State {
    switch (action.type) {
        case LoginActionTypes.LOGIN_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
            };
        case LoginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false,
            };
        case LoginActionTypes.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        default:
            return state;
    }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
