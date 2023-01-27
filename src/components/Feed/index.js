import { useContext, useEffect } from 'react';
import { Composer } from '../forms/Composer';
import { PostsContainer } from '../Post';
import { RecentComments } from '../RecentComments';
import { useProfile } from '../../hooks';
import { authContext } from '../../lib/authContext';

export const Feed = () => {
    const { data, isSuccess } = useProfile();
    const { setAuthData } = useContext(authContext);

    useEffect(() => {
        if (data && isSuccess) {
            setAuthData(data);
        }
    }, [data, isSuccess]);

    return (
        <>
            <div className='posts'>
                <h1 className='title'>Стена</h1>
                <Composer />
                <PostsContainer />
            </div>
            <RecentComments />
        </>
    );
};
