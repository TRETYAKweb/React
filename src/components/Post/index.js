import { CommentIcon } from '../Icons/CommentIcon';
import { LikeIcon } from '../Icons/LikeIcon';

const Post = () => {
    return (
        <section className='post'>
            <img src='https://placeimg.com/256/256/animals' alt='avatar' />

            <a>Chuck Norris</a>

            <time>about 4 hours ago</time>

            <p>
                Lend your friend $20, if he doesn’t pay you back then he’s not
                your friend. Money well spent ~ Ted Nicolas
            </p>

            <div className='reaction-controls'>
                <section className='like'>
                    <div>
                        <span>0</span>
                    </div>
                    <span className='icon'>
                        <LikeIcon /> Like
                    </span>
                </section>

                <span className='comment'>
                    <CommentIcon />0 comments
                </span>
            </div>
        </section>
    );
};

export const PostsContainer = () => {
    return (
        <div className='posts-container' style={{ position: 'relative' }}>
            <Post />
            <Post />
            <Post />
        </div>
    );
};
