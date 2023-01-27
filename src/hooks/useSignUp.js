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

    console.log(mutation);

    useEffect(() => {
        if (mutation.isSuccess && mutation.data) {
            navigation('/login');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
