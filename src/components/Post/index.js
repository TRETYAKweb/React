import { useState, useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { CommentForm } from '../forms/CommentForm';
import { CommentBody } from '../Comment';
import { CommentIcon } from '../Icons/CommentIcon';
import { LikeIcon } from '../Icons/LikeIcon';

import postJson from '../../data/mock-data/posts.json';
import { commentsFormContext } from '../../lib/commentsFormContext';


const Post = ({ data }) => {
    const { currentPostHash, setCurrentPostHash } = useContext(commentsFormContext);
    const [comments, setComments] = useState(data.comments);

    // TODO: Переделать юзерНейм
    const userName = document.querySelector('.navigation-profile')?.textContent;

    const handleCommentBtnClick = () => {
        setCurrentPostHash(data.hash);
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

                    {/* TODO: Переделать Классі */}

                    <span onClick={handleCommentBtnClick} className={currentPostHash === data.hash ? 'comment comment-fill' : 'comment'} >
                        <CommentIcon />{comments.length} comments
                    </span>
                </div>
                {currentPostHash === data.hash && <>
                    <CommentForm
                        addComment={ addComment} />
                    <hr className='separator'></hr>
                    <ul>
                        <CommentBody comments={comments} />
                    </ul>
                </>}
            </li>

        </>
    );
};

export const PostsContainer = () => {
    return (
        <ul className='posts-container'>
            {postJson.map((data) =>  <Post key={data.hash} data={data} />)}
        </ul>
    );
};
