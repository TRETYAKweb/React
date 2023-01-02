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
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M12.8785 20.6337C12.475 20.8136 12.1835 20.8814 12.0031 20.886H12H11.9535C11.7712 20.873 11.4932 20.8025 11.1187 20.6354C10.7213 20.4581 10.2595 20.1922 9.75608 19.8424C8.74949 19.1432 7.62035 18.1397 6.56267 16.9366C4.42616 14.5063 2.70001 11.4004 2.70001 8.478C2.70001 5.78296 4.93307 3.474 7.35301 3.474C9.27104 3.474 10.6155 4.8003 11.3873 5.88801L11.9992 6.75035L12.6108 5.88781C13.3807 4.80204 14.7252 3.474 16.644 3.474C19.0659 3.474 21.298 5.78287 21.298 8.479C21.298 11.4003 19.5717 14.5056 17.4349 16.9356C16.3771 18.1386 15.2479 19.1419 14.2412 19.841C13.7377 20.1906 13.2759 20.4565 12.8785 20.6337Z'
                                stroke='#616770'
                                strokeWidth='1.5'></path>
                        </svg>
                        Like
                    </span>
                </section>

                <span className='comment'>
                    <svg
                        className='comment-icon'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M14.0442 2.99199L14.1869 2.99234C18.0754 3.06553 21.0906 6.12406 21.096 10.03V10.045C21.0933 12.1512 20.0647 14.3074 18.3184 15.7855C17.5518 16.434 15.6384 17.7416 13.838 18.9351C12.0679 20.1086 10.4636 21.1349 10.3152 21.2294C10.3149 21.2284 10.3146 21.2274 10.3143 21.2264C10.3131 21.2222 10.3121 21.2183 10.3114 21.2147L10.311 21.2129V17.404V16.6822L9.58973 16.6545C5.67502 16.5045 2.84601 13.6916 2.84601 10.034C2.84601 6.07302 5.93641 2.98199 9.89601 2.98199H9.89711H9.89801L14.0442 2.99199Z'
                            stroke='#616770'
                            strokeWidth='1.5'></path>
                    </svg>
                    0 comments
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
