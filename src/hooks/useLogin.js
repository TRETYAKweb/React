import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import { useStore } from './useStore';


export const useLogin = () => {
    const { authStore } = useStore();
    const navigate = useNavigate();

    const mutation = useMutation((credentials) => api.auth.login(credentials));

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            authStore.setToken(token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
