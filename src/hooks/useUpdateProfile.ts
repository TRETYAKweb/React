import { useMutation, useQueryClient } from 'react-query';

import { api } from '../api/api';
import { IProfileRequest } from '../types';

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation((data: IProfileRequest) => {
        return api.profile.updateProfile(data);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('profile');
        },
    });

    return mutation;
};
