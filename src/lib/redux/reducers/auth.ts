import { AnyAction } from 'redux';
import { authTypes } from '../types';

const initialState = {
    token: '',
};

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
