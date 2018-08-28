import { LoginActionTypes, LoginActions } from '../actions/login';
import { User } from '../models/user';

export interface State {
    user: User | null;
}

export const initialState: State = {
    user: null,
};

export function reducer(state = initialState, action: LoginActions): State {
    switch (action.type) {
        case LoginActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
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
