import { useMutation } from 'react-query';

import { api } from '../api/api';

export const useUpdateProfile = () => {
    const mutation = useMutation((data) => {
        return api.profile.updateProfile(data);
    });

    return mutation;
};
