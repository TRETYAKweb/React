import { errorTypes } from '../types';

export const errorAction = Object.freeze({
    setError: (message) => {
        return {
            type:    errorTypes.SET_ERROR,
            payload: message,
            error:   true,
        };
    },

    resetError: () => {
        return {
            type: errorTypes.RESET_ERROR,
        };
    },
});
