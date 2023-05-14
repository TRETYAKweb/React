import { IResetPassword } from '../../../types';
import { IPayloadAction } from '../../../types/redux';
import { authTypes } from '../types';

export const authActions = Object.freeze({
    setToken: (token: string): IPayloadAction<string> => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },
    resetPasswordRequest: (data: IResetPassword): IPayloadAction<IResetPassword> => {
        const { oldPassword, newPassword } = data;

        return {
            type:    authTypes.RESET_PASSWORD_REQUEST,
            payload: { oldPassword, newPassword },
        };
    },
});

