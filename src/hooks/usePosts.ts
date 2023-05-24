import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { errorAction } from '../lib/redux/actions';
import { IApiErrorResponse } from '../types';
// Api
import { api } from '../api/api';
import { useAppDispatch } from '../lib/redux/init/store';


export const usePosts = () => {
    const dispatch = useAppDispatch();
    const query = useQuery('posts', api.posts.fetch, {
        onError: (error: AxiosError<IApiErrorResponse>) => {
            if (error.response) {
                dispatch(errorAction.setError(error.response.data.message));
            }
        },
    });

    console.log(query.data);

    return {
        ...query,
        data: Array.isArray(query.data?.data) ? query.data?.data : [],
    };
};
