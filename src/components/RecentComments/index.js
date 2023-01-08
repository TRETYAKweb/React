import commentJson from '../../data/mock-data/comments.json';

const Comment = () => {
    return (
        <>
            {commentJson.map((it) => <li className='comment' key={it.hash}>
                <a href={`/users/${it.author.hash}`}>
                    <p className='name'>{it.author.name}</p>
                </a>
                <time>{it.created}</time>
                <p className='body'>{it.body}</p>
                <a href={`/rtx-homeworks/feed/${it.post.hash}`}>
                    Больше комментариев к посту
                </a>
            </li>)}
        </>
    );
};

export const RecentComments = () => {
    return (
        <div className='most-recent-comments'>
            <h1 className='title'>Популярные комментарии</h1>;
            <ul>
                <Comment />
            </ul>
        </div>
    );
};

