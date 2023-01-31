// Core
import {
    Routes, Route, Navigate,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { MainLayout } from './components/MainLayout';
import { useStore, useAuth } from './hooks';

// Pages

import {
    FeedPage, ProfilePage, PostCommentsPage, SignUpPage, LoginPage,
} from './pages';

export const App = observer(() => {
    const { uiStore } = useStore();

    useAuth();

    // console.log(error, 'error');

    useEffect(() => {
        if (uiStore.errorMessage) {
            const notify = () => toast.error(uiStore.errorMessage, {
                position:        'top-right',
                autoClose:       5000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });

            notify();

            uiStore.resetError();
        }
    }, [uiStore.errorMessage]);

    return <Routes>

        <Route element={<MainLayout hasNav />}>
            <Route path='/feed' element={<FeedPage />} />
            <Route path='/feed/:postId' element={<PostCommentsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Route>


        <Route element={<MainLayout />}>
            <Route path='/signup' element={<SignUpPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Route>

        <Route path='*' element={ <Navigate to ='/feed' replace />} />

    </Routes>;
});
