// Core
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
// Core

// Components
import { CommentForm } from '../forms/CommentForm';
import { Comment } from '../Comment';
import { CommentIcon } from '../Icons/CommentIcon';
import { LikeIcon } from '../Icons/LikeIcon';

import { selectCurrentPostHash } from '../../lib/redux/selectors';
import { commentsFormActions } from '../../lib/redux/actions';

// Helpers
import { fetchify } from '../../helpers/fetchify';

// Hooks
import { usePosts } from '../../hooks';
import { IPost } from '../../types';
import { useAppDispatch, useAppSelector } from '../../lib/redux/init/store';

interface IPostProps {
    data: IPost;
}

const Post: React.FC<IPostProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const currentPostHash = useAppSelector(selectCurrentPostHash);
    const [comments, setComments] = useState(data.comments);

    const userName = 'Евгений Третяк';

    const handleCommentBtnClick = () => {
        dispatch(commentsFormActions.setCurrentPostHash(data.hash));
    };

    const addComment = (comment: string) => {
        setComments([
            ...comments,
            {
                hash:    uuidV4(),
                body:    comment,
                created: new Date().toLocaleString(),
                author:  {
                    hash: uuidV4(),
                    name: userName,
                },
            },
        ]);
    };

    return (
        <>
            <li className='post'>
                <img src={data.author.avatar} alt='avatar' />

                <a href={`/users/${data.author.hash}`}>{data.author.name}</a>

                <time>{data.created}</time>

                <p>
                    {data.body}
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

                    <span onClick={handleCommentBtnClick} className={currentPostHash === data.hash ? 'comment comment-fill' : 'comment'} >
                        <CommentIcon />{comments.length} comments
                    </span>
                </div>
                {currentPostHash === data.hash && <>
                    <CommentForm
                        addComment={ addComment} />

                    <hr className='separator'></hr>
                    <ul>
                        {comments.map((it) => <Comment
                            key={it.hash}
                            authorName={it.author.name}
                            created={it.created}
                            body={it.body} />)}
                    </ul>
                </>}
            </li>

        </>
    );
};

export const PostsContainer:React.FC = () => {
    const {
        data, isFetched,
    } = usePosts();

    console.log(data);

    const postJSX = data?.map((ti) =>  <Post key={ti.hash} data={ti} />);


    return (
        <ul className='posts-container'>
            {fetchify(isFetched, postJSX)}
        </ul>
    );
};
