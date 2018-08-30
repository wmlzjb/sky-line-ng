import { LoginActionTypes, LoginActions } from '../actions/login';
import { User } from '../models/user';

export interface State {
    user: User | null;
    token: string | null;
}

export const initialState: State = {
    user: null,
    token: null
};

export function reducer(state = initialState, action: LoginActions): State {
    switch (action.type) {
        case LoginActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        }

        case LoginActionTypes.LOGIN_TOKEN: {
            return {
                ...state,
                token: action.payload.token
            };
        }

        case LoginActionTypes.LOGIN_OUT: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getUser = (state: State) => state.user;
