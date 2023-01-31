import { useContext, useEffect } from 'react';
import { Composer } from '../forms/Composer';
import { PostsContainer } from '../Post';
import { RecentComments } from '../RecentComments';
import { useProfile } from '../../hooks';

export const Feed = () => {
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
