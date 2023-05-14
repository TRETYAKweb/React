import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { errorAction } from '../lib/redux/actions';
import { api } from '../api/api';
import { IApiErrorResponse, IAuthRequest } from '../types';
import { useAppDispatch } from '../lib/redux/init/store';

export const useSignUp = () => {
    const navigation = useNavigate();

    const dispatch = useAppDispatch();

    const mutation = useMutation((user: IAuthRequest) => api.auth.signup(user), {
        onError: (error: AxiosError<IApiErrorResponse>) => {
            if (error.response) {
                dispatch(errorAction.setError(error.response.data.message));
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess && mutation.data) {
            navigation('/login');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
