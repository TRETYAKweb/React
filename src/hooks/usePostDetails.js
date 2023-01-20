import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

// Api
import { api } from '../api/api';

export const usePostDetails = (id) => {
    const onError = (error) => {
        toast.error(error.message);
    };

    const { data, isFetched } = useQuery('PostDetails', () => api.posts.getPostById(id), {
        onError,
    });

    return {
        data,
        isFetched,
    };
};
