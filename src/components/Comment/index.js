export const Comment = ({ authorName, created, body }) => {
    return (
        <>
            <li className='commentBody'>
                <p>
                    {authorName}
                    <span>{created}</span>
                </p>
                <p>{body}</p>
            </li>
        </>
    );
};
