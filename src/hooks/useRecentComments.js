import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { api } from '../api/api';


export const useRecentComments = () => {
    const onError = (error) => {
        toast(error.message);
    };
    const query = useQuery('сomments', api.posts.getComments, {
        onError,
    });

    return query;
};
