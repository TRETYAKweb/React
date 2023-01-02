import { Navigation } from '../Navigation';
import { Composer } from '../forms/Composer';
import { PostsContainer } from '../Post';
import { RecentComments } from '../RecentComments';
import { Footer } from '../footer';

export const Feed = () => {
    return (
        <>
            <main>
                <div className='feed-wrapper'>
                    <div className='container'>
                        <Navigation />
                        <div className='posts'>
                            <h1 className='title'>Стена</h1>
                            <Composer />
                            <PostsContainer />
                        </div>
                        <RecentComments />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
