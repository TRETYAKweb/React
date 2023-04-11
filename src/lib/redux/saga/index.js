import { all } from 'redux-saga/effects';
import { resetPasswordSaga } from './authSaga';

export function* rootSaga() {
    yield all([resetPasswordSaga()]);
}
