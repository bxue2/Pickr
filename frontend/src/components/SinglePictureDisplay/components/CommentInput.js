import {csrfFetch} from '../../../store/csrf';
import {useState} from 'react';

const CommentInput = ({comments, setComments}) => {
    const [newComment, setNewComment] = useState();
    const submitComment = (e) => {
        e.preventDefault();
        console.log(newComment);
        const response = await csrfFetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({})
        })
        const data = await response.json();
        let addComments = [...comments];
        addComments.push(data);
        setComments(addComments);
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
