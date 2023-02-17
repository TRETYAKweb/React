import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { errorAction } from '../lib/redux/actions';
import { api } from '../api/api';

export const useSignUp = () => {
    const navigation = useNavigate();

    const dispatch = useDispatch();

    const mutation = useMutation((user) => api.auth.signup(user), {
        onError: (error) => {
            dispatch(errorAction.setError(error.response.data.message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess && mutation.data) {
            navigation('/login');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
