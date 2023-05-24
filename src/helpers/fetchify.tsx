import { ReactNode } from 'react';

export const fetchify = (isFetched: boolean, content:ReactNode) => {
    if (!isFetched) {
        return <h3 className='fetchify'>Загрузка...</h3>;
    }

    if (content) {
        return content;
    }

    return null;
};
