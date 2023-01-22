import { useQuery } from 'react-query';
import { api } from '../api';

export const useProfile = () => {
    const query = useQuery('profile', api.profile.fetch);

    return query;
};
