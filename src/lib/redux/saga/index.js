import { all } from 'redux-saga/effects';
import { resetPasswordWatcher } from './authSaga';

export function* rootWatcher() {
    yield all([resetPasswordWatcher()]);
}
