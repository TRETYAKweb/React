import { useState } from 'react';
import { authContext } from '../lib/authContext';

const initialState = {
    name:   'Evheniy Tretyak',
    email:  'tretyakbro@gmail.com',
    avatar: 'https://placeimg.com/256/256/animals',
};

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(initialState);

    return  <authContext.Provider value={{ authData, setAuthData }}>
        {children}
    </authContext.Provider>;
};
