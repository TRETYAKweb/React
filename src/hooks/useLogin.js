import { useMutation } from 'react-query';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from './useProfile';
import { api } from '../api/api';

import { authContext } from '../lib/authContext';


export const useLogin = () => {
    const navigate = useNavigate();
    const { setAuthData } = useContext(authContext);

    const mutation = useMutation((credential) => {
        return api.auth.login(credential);
    });

    // const { data, isSuccess } =  useProfile();

    // useEffect(() => {
    //     if (data.data && isSuccess) {
    //         setAuthData(data.data);
    //     }
    // }, [data, isSuccess]);


    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
