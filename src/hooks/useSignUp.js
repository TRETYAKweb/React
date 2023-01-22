import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../api/api';

export const useSignUp = () => {
    const navigation = useNavigate();

    const onError = (error) => {
        toast.error(error.message);
    };

    const mutation = useMutation((user) => {
        return api.auth.signup(user);
    }, {
        onError,
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigation('/feed');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
