import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import { authActions } from '../lib/redux/actions';
import { useAppDispatch } from '../lib/redux/init/store';
import { IAuthRequest } from '../types';


export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const mutation = useMutation((credentials:IAuthRequest) => api.auth.login(credentials));

    useEffect(() => {
        if (mutation.isSuccess) {
            const data = mutation.data?.data;
            localStorage.setItem('token', data);
            dispatch(authActions.setToken(data));
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
