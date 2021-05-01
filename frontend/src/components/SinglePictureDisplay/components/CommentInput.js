import {csrfFetch} from '../../../store/csrf';
import {useState} from 'react';

const CommentInput = ({comments, setComments, pictureid}) => {
    const [newComment, setNewComment] = useState();
    const submitComment = async (e) => {
        e.preventDefault();
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
    }
    return (
        <div className='comment-section'>
            <form className='add-comment-form' onSubmit={submitComment}>
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
