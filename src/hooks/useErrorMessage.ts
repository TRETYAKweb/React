import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { selectErrorMessage } from '../lib/redux/selectors';
import { errorAction } from '../lib/redux/actions';
import { toastOptions } from '../constants/toastOptions';
import { useAppDispatch, useAppSelector } from '../lib/redux/init/store';

export const useErrorMessage = () => {
    const errorMessage = useAppSelector(selectErrorMessage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);
            dispatch(errorAction.resetError());
        }
    }, [errorMessage]);
};
