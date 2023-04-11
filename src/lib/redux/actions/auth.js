import { authTypes } from '../types';

export const authActions = Object.freeze({
    setToken: (token) => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },
    resetPasswordRequest: (oldPassword, newPassword) => {
        return {
            type:    authTypes.RESET_PASSWORD_REQUEST,
            payload: { oldPassword, newPassword },
        };
    },
});

