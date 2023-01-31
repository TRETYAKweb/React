export const CommentForm = ({ addComment }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const comment = formData.get('body');
        addComment(comment);
        form.reset();
    };

    return <>
        <form onSubmit={handleSubmit} className='commentForm'>
            <img
                src='https://placeimg.com/256/256/animals' alt='avatar'
                className='comment-avatar' />

            <label>
                <div>
                    <span className='error-message'></span>
                </div>
                <input
                    placeholder='Комментарий...' type='text'
                    name='body' />
            </label>

            <button type='submit'>Комментировать</button>
        </form>
    </>;
};
