const Comment = () => {
    return (
        <>
            <div className='comment'>
                <p className='name'>Chuck Norris</p>
                <time>1 day ago</time>
                <p className='body'>788778</p>
                <a href='/rtx-homeworks/feed/1d180bec-6e45-4e29-91f5-7339625fcb1c/comments'>
                    Больше комментариев к посту
                </a>
            </div>
        </>
    );
};

export const RecentComments = () => {
    return (
        <div className='most-recent-comments'>
            <h1 className='title'>Популярные комментарии</h1>;
            <section>
                <Comment />
                <Comment />
                <Comment />
            </section>
        </div>
    );
};
