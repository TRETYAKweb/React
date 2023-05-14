import { IPayloadAction } from '../../../types/redux';
import { errorTypes } from '../types';

export const errorAction = Object.freeze({
    setError: (message: string) : IPayloadAction<string> => {
        return {
            type:    errorTypes.SET_ERROR,
            payload: message,
            error:   true,
        };
    },

    resetError: () : IPayloadAction<null> => {
        return {
            type:    errorTypes.RESET_ERROR,
            payload: null,
        };
    },
});
