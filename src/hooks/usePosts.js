import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

// Api
import { api } from '../api/api';


export const usePosts = () => {
    const onError = (error) => {
        toast.error(error.message);
    };

    const query = useQuery('posts', api.posts.fetch, {
        onError,
    });

    return query;
};
