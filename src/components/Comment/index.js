export const CommentBody = (props) => {
    return (
        <>
            {props.comments.map((it) => <li className='commentBody' key={it.hash}>
                <p>
                    {it.author.name}
                    <span>{it.created}</span>
                </p>
                <p>{it.body}</p>
            </li>)}
        </>
    );
};
