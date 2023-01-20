export const Profile = () => {
    return (
        <>
            <div className='form'>
                <div className='wrapper'>
                    <div>
                        <h1>Привет, Chuck Norris</h1>
                        <img src='https://placeimg.com/256/256/animals' alt='avatar' />
                        <label>
                            <div>
                                <span className='error-message'></span>
                            </div>
                            <input placeholder='Имя' type='text' />
                        </label>
                        <label>
                            <div>
                                <span className='error-message'></span>
                            </div>
                            <input placeholder='Фамилия' type='text' />
                        </label>
                        <button className='loginSubmit' type='submit'>Обновить профиль</button>
                    </div>
                    <a href='/rtx-homeworks/profile/new-password'>Cменить пароль →</a>
                </div>
            </div>
        </>
    );
};
