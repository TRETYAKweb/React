import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore, useProfile  } from '.';

// Api
import { api } from '../api/api';


export const useAuth = () => {
    const { uiStore } = useStore();

    const query = useQuery('auth', api.auth.auth, {
        onError: (error) => {
            uiStore.setErrorMessage(error.response.data.message);
        },
    });

    return query;
};
