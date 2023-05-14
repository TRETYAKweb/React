// Core
import {
    Routes, Route, Navigate,
} from 'react-router-dom';
import { MainLayout } from './components/MainLayout';

// Pages

import {
    FeedPage, ProfilePage, PostCommentsPage, SignUpPage, LoginPage, NewPasswordPage,
} from './pages';

import { useErrorMessage } from './hooks/useErrorMessage';

export const App: React.FC = () => {
    useErrorMessage();

    return <Routes>

        <Route element={<MainLayout hasNav />}>
            <Route path='/feed' element={<FeedPage />} />
            <Route path='/feed/:postId' element={<PostCommentsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/newPassword' element={<NewPasswordPage />} />
        </Route>


        <Route element={<MainLayout />}>
            <Route path='/signup' element={<SignUpPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Route>

        <Route path='*' element={ <Navigate to ='/feed' replace />} />

    </Routes>;
};
