import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostDetails } from '../../hooks/usePostDetails';


import {  fetchify } from '../../helpers/fetchify';


export const PostComments = () => {
    const navigate = useNavigate();
    const { postId } = useParams();

    const { data, isFetched } = usePostDetails(postId);

    useEffect(() => {
        if (!data && isFetched) {
            navigate('..', { replace: true });
        }
    }, [data, isFetched]);


    const commentsJSX = data?.comments.map(({
        body, author, created, hash,
    }) => <div className='comment' key={hash}>

        <p>{author.name}</p>
        <time>{created}</time>
        <p>{body}</p>

    </div>);

    const goBack = () => navigate('..');

    return (
        <>
            <div className='wrapper'>
                <a
                    onClick={goBack}
                    activeclassname='active' aria-current='page'
                    className='link-back active'>
                    <div className='arrow'></div>Назад
                </a>
                <h1 className='title'>Комментарии к посту</h1>
                <section>
                    <div className='comment'>
                        <p className='name'> </p>
                        <time>{fetchify(isFetched, data?.created)}</time>
                        <p className='body'>{fetchify(isFetched, data?.body)}</p>
                        <p className='subtitle'>Популярные комментарии</p>
                        { fetchify(isFetched, commentsJSX)}
                    </div>
                </section>
            </div>
        </>
    );
};
