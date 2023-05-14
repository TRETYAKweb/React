import { ICommentProps } from '../../types';

export const Comment: React.FC<ICommentProps> = ({ authorName, created, body }) => {
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
