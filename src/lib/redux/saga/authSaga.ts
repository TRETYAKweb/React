import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { authTypes } from '../types/auth';
import { authActions, errorAction } from '../actions';
import { api } from '../../../api';
import { IApiSuccessResponse, IResetPassword } from '../../../types';
import { IPayloadAction } from '../../../types/redux';

function* resetPassword(
    action: IPayloadAction<IResetPassword>,
): Generator<any, void, IApiSuccessResponse<string>> {
    try {
        const { oldPassword, newPassword } = action.payload;
        const data = yield call(api.auth.resetPassword, { oldPassword, newPassword });
        yield put(authActions.setToken(data.data));
    } catch (error) {
        if (error instanceof AxiosError) {
            yield put(errorAction.setError(error.message));
        }
    }
}

export function* resetPasswordSaga() {
    yield takeEvery(authTypes.RESET_PASSWORD_REQUEST, resetPassword);
}
