// Core
import { Feed } from './components/Feed';
import { CommentsFormProvider } from './providers/CommentsFormProvider';
// Components

export const App = () => {
    return <CommentsFormProvider>
        <Feed />;
    </CommentsFormProvider>;
};
