export const Navigation = () => {
    return (
        <div>
            <div className='navigation-profile'>
                <div className='profile-wrapper'>
                    <img
                        alt=''
                        className='navigation-avatar'
                        src='https://placeimg.com/256/256/animals' />
                    <div className='user-status'>
                        <div className='status online'>
                            <span></span>
                        </div>
                    </div>
                </div>
                Chuck Norris
            </div>
            <a
                activeclassname='active'
                className='navigation-item'
                href='/rtx-homeworks/profile'>
                Профиль
            </a>
            <a
                activeclassname='active'
                aria-current='page'
                className='navigation-item active'
                href='/rtx-homeworks/feed'>
                Стена
            </a>
            <button className='logout'>Выйти</button>
        </div>
    );
};
