import { useContext, useEffect } from 'react';
import { Composer } from '../forms/Composer';
import { PostsContainer } from '../Post';
import { RecentComments } from '../RecentComments';
import { useProfile } from '../../hooks';
import { AppContext } from '../../lib';

export const Feed = () => {
    const { data, isSuccess } = useProfile();
    const { setAuthData } = useContext(AppContext);

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
