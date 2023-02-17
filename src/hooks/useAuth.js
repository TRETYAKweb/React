import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { errorAction } from '../lib/redux/actions';

// Api
import { api } from '../api/api';


export const useAuth = () => {
    const dispatch = useDispatch();

    const query = useQuery('auth', api.auth.auth, {
        onError: (error) => {
            dispatch(errorAction.setError(error.response.data.message));
        },
    });

    return query;
};
