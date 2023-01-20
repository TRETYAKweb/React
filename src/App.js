// Core
import {
    Routes, Route, Navigate,
} from 'react-router-dom';

import { LayoutWithNavigation } from './components/LayoutWithNavigation';

// Pages

import { FeedPage, ProfilePage, PostCommentsPage } from './pages';

export const App = () => {
    return <>

        <Routes>

            <Route element={<LayoutWithNavigation />}>
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/feed/:postId' element={<PostCommentsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Route>

            <Route path='*' element={ <Navigate to ='/feed' replace />} />
        </Routes>
    </>;
};
