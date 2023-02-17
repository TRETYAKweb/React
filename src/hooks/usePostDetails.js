import { useQuery } from 'react-query';
// Api
import { useDispatch } from 'react-redux';
import { api } from '../api/api';
import { errorAction } from '../lib/redux/actions';

export const usePostDetails = (id) => {
    const dispatch = useDispatch();

    const { data, isFetched } = useQuery('PostDetails', () => api.posts.getPostById(id), {
        onError: (error) => {
            dispatch(errorAction.setError(error.response.data.message));
        },
    });

    return {
        data,
        isFetched,
    };
};
