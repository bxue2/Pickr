import {csrfFetch} from '../../../store/csrf';
import {useState} from 'react';
import {useSelector} from 'react-redux';

const CommentInput = ({comments, setComments, pictureid}) => {
    const [newComment, setNewComment] = useState();
    const [commentError, setCommentError] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const submitComment = async (e) => {
        e.preventDefault();
        if(sessionUser){
            const response = await csrfFetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({comment: newComment, picture_id: pictureid})
            })
            const data = await response.json();
            let addComments = [...comments];
            addComments.push(data);
            setComments(addComments);
            setNewComment('');
        } else{
            setCommentError(true);
        }

    }
    return (
        <div className='comment-section'>
            <form className='add-comment-form' onSubmit={submitComment}>
                {
                    commentError && (
                        <div style={{color: 'red'}}>
                            Must be logged in to post a comment.
                        </div>
                    )
                }
                <textarea
                    placeholder='Add comment'
                    value={newComment}
                    onChange={(e) => {setNewComment(e.target.value)}}
                />
                <button type='submit'>Add Comment</button>
            </form>
        </div>
    )
}

export default CommentInput;
