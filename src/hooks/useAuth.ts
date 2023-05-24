import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { errorAction } from '../lib/redux/actions';

// Api
import { api } from '../api/api';
import { IApiErrorResponse } from '../types';


export const useAuth = () => {
    const dispatch = useDispatch();

    const query = useQuery('auth', api.auth.auth, {
        onError: (error:AxiosError<IApiErrorResponse>) => {
            if (error.response) {
                dispatch(errorAction.setError(error.response.data.message));
            }
        },
    });

    return query;
};
