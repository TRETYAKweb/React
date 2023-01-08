import { useState } from 'react';
import { commentsFormContext } from '../lib/commentsFormContext';

export const CommentsFormProvider = ({ children }) => {
    const [currentPostHash, setCurrentPostHash] = useState(null);

    return  <commentsFormContext.Provider value={{ currentPostHash, setCurrentPostHash }}>
        {children}
    </commentsFormContext.Provider>;
};
