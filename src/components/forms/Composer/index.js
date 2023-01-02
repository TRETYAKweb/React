export const Composer = () => {
    return (
        <section className='composer'>
            <img src='https://placeimg.com/256/256/animals' alt='avatar' />
            <form>
                <label>
                    <div>
                        <span className='error-message'></span>
                    </div>
                    <textarea
                        name='body'
                        placeholder="What's on your mind, Chuck Norris?"></textarea>
                </label>
                <button type='submit'>Запостить</button>
            </form>
        </section>
    );
};
