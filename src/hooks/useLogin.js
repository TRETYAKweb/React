import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';


export const useLogin = () => {
    const navigate = useNavigate();


    const mutation = useMutation((credential) => {
        return api.auth.login(credential);
    });


    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
