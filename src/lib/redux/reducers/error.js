import { errorTypes } from '../types';

const initialState = {
    errorMessage: '',
    error:        false,
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case errorTypes.SET_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
                error:        true,
            };
        }

        case errorTypes.RESET_ERROR: {
            return {
                ...state,
                errorMessage: '',
                error:        false,
            };
        }

        default: {
            return state;
        }
    }
};
