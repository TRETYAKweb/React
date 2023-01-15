// Core
import { useState, useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';

// Components
import { CommentForm } from '../forms/CommentForm';
import { Comment } from '../Comment';
import { CommentIcon } from '../Icons/CommentIcon';
import { LikeIcon } from '../Icons/LikeIcon';

// Context
import { commentsFormContext } from '../../lib/commentsFormContext';

// Helpers
import { fetchify } from '../../helpers/fetchify';

// Hooks
import { usePosts } from '../../hooks';

const Post = ({ data }) => {
    const [isCommentAddingFormVisible, setIsCommentAddingFormVisible] = useState(false);
    const { currentPostHash, setCurrentPostHash } = useContext(commentsFormContext);
    const [comments, setComments] = useState(data.comments);

    const userName = 'Евгений Третяк';

    const handleCommentBtnClick = () => {
        setCurrentPostHash(data.hash);
        setIsCommentAddingFormVisible((prev) => !prev);
    };

    const addComment = (comment) => {
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

                    <span onClick={handleCommentBtnClick} className={currentPostHash === data.hash && isCommentAddingFormVisible ? 'comment comment-fill' : 'comment'} >
                        <CommentIcon />{comments.length} comments
                    </span>
                </div>
                {currentPostHash === data.hash && isCommentAddingFormVisible && <>
                    <CommentForm
                        addComment={ addComment}
                        showComments={ setIsCommentAddingFormVisible } />

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

export const PostsContainer = () => {
    const {
        data, isFetched,
    } = usePosts();

    const postJSX = data?.map((ti) =>  <Post key={ti.hash} data={ti} />);

    return (
        <ul className='posts-container'>
            {fetchify(isFetched, postJSX)}
        </ul>
    );
};
