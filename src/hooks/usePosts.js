import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { errorAction } from '../lib/redux/actions';

// Api
import { api } from '../api/api';


export const usePosts = () => {
    const dispatch = useDispatch();
    const query = useQuery('posts', api.posts.fetch, {
        onError: (error) => {
            dispatch(errorAction.setError(error.response.data.message));
        },
    });

    return query;
};
