import { NavLink, useNavigate } from 'react-router-dom';
import { useProfile } from '../../hooks';

export const Navigation = () => {
    const navigation = useNavigate();
    const { data } = useProfile();

    const handleClick = () => navigation('/login');

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
                {data?.name}
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
            <button onClick={handleClick} className='logout'>Выйти</button>
        </div>
    );
};
