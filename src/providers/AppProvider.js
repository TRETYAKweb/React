import { useState } from 'react';
import { AppContext } from '../lib/AppContext';

const initialState = {
    name:   'Evheniy Tretyak',
    email:  'tretyakbro@gmail.com',
    avatar: 'https://placeimg.com/256/256/animals',
};

export const AppProvider = ({ children }) => {
    const [currentPostHash, setCurrentPostHash] = useState(null);
    const [authData, setAuthData] = useState(initialState);


    return  <AppContext.Provider value={{
        currentPostHash, setCurrentPostHash, authData,  setAuthData,
    }}>
        {children}
    </AppContext.Provider>;
};
