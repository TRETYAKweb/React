import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { errorAction } from '../lib/redux/actions';
import { api } from '../api/api';
import { IApiErrorResponse } from '../types';


export const useRecentComments = () => {
    const dispatch = useDispatch();

    const query = useQuery('сomments', api.posts.getComments, {
        onError: (error: AxiosError<IApiErrorResponse>) => {
            if (error.response) {
                dispatch(errorAction.setError(error.response.data.message));
            }
        },
    });

    return {
        ...query,
        data: Array.isArray(query.data?.data) ? query.data?.data : [],
    };
};
