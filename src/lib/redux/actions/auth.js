import { authTypes } from '../types';

export const authActions = Object.freeze({
    setToken: (token) => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },
    asyncResetPassword: (oldPassword, newPassword) => {
        return {
            type:    authTypes.ASYNC_RESET_PASSWORD,
            payload: { oldPassword, newPassword },
        };
    },
});

