import { NavLink } from 'react-router-dom';
import { useRecentComments } from '../../hooks/useRecentComments';

import { fetchify } from '../../helpers';

const Comment = () => {
    const { data, isFetched } = useRecentComments();

    const commentsJSX = data?.map((it) => <li className='comment' key={it.hash}>
        <a href={`/users/${it.author.hash}`}>
            <p className='name'>{it.author.name}</p>
        </a>
        <time>{it.created}</time>
        <p className='body'>{it.body}</p>
        <NavLink to={`/feed/${it.post.hash}`}>
        Больше комментариев к посту
        </NavLink>
    </li>);

    return (
        <>
            { fetchify(isFetched, commentsJSX)}
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

