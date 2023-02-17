import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectErrorMessage } from '../lib/redux/selectors';
import { errorAction } from '../lib/redux/actions';
import { toastOptions } from '../constants/toastOptions';

export const useErrorMessage = () => {
    const errorMessage = useSelector(selectErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);
            dispatch(errorAction.resetError());
        }
    }, [errorMessage]);
};
