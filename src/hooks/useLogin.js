import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { api } from '../api/api';
import { authActions } from '../lib/redux/actions';


export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const mutation = useMutation((credentials) => api.auth.login(credentials));

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
