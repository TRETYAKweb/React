import { NavLink } from 'react-router-dom';

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
            <NavLink
                to = '/profile'
                className='navigation-item'>
                Профиль
            </NavLink>
            <NavLink
                to = '/feed'
                aria-current='page'
                className='navigation-item'>
                Стена
            </NavLink>
            <button className='logout'>Выйти</button>
        </div>
    );
};
