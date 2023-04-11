import { call, put, takeEvery } from 'redux-saga/effects';
import { authTypes } from '../types/auth';
import { authActions, errorAction } from '../actions';
import { api } from '../../../api';

function* resetPassword(action) {
    try {
        const { oldPassword, newPassword } = action.payload;
        const data = yield call(api.auth.resetPassword, { oldPassword, newPassword });
        yield put(authActions.setToken(data.token));
    } catch (error) {
        yield put(errorAction.setError(error.message));
    }
}

export function* resetPasswordSaga() {
    yield takeEvery(authTypes.RESET_PASSWORD_REQUEST, resetPassword);
}
