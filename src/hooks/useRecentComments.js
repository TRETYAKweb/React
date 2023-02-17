import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { errorAction } from '../lib/redux/actions';
import { api } from '../api/api';


export const useRecentComments = () => {
    const dispatch = useDispatch();

    const query = useQuery('сomments', api.posts.getComments, {
        onError: (error) => {
            dispatch(errorAction.setError(error.response.data.message));
        },
    });

    return query;
};
