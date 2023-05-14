import { Composer } from '../forms/Composer';
import { PostsContainer } from '../Post';
import { RecentComments } from '../RecentComments';

export const Feed: React.FC = () => {
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
