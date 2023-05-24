import { useQuery } from 'react-query';
// Api
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { api } from '../api/api';
import { errorAction } from '../lib/redux/actions';
import { IApiErrorResponse } from '../types';

export const usePostDetails = (id: string) => {
    const dispatch = useDispatch();

    const query = useQuery('PostDetails', () => api.posts.getPostById(id), {
        onError: (error: AxiosError<IApiErrorResponse>) => {
            if (error.response) {
                dispatch(errorAction.setError(error.response.data.message));
            }
        },
    });

    return {
        ...query,
        data: query?.data?.data,
    };
};
