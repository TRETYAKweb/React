import { useMutation, useQueryClient } from 'react-query';

import { api } from '../api/api';

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation((data) => {
        return api.profile.updateProfile(data);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('profile');
        },
    });

    return mutation;
};
