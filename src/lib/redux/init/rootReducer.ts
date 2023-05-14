import { combineReducers } from 'redux';


import {
    authReducer as auth,
    errorReducer as error,
    commentsFormReducer as commentsForm,
} from '../reducers';

export const rootReducer = combineReducers({
    auth,
    error,
    commentsForm,
});
