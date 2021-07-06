import {useState} from 'react'
import {Link} from 'react-router-dom';
import {convertToDate} from '../../../utils/DateTimeConvert';
import {useSelector} from 'react-redux'
import {csrfFetch} from '../../../store/csrf';
const SingleCommentComponent = ({comments, setComments, comment}) => {
    let sessionUser = useSelector(state => state.session.user)
    let [showEdit, setShowEdit] = useState(false);
    let [editComment, setEditComment] = useState(comment.comment);


    const suhbmitEditComment = async (e) => {
        e.preventDefault();
        await csrfFetch(`/api/comments/${comment.id}`, {
            method: 'PATCH'
        })
        return;
    }

    const deleteComment = async (e) => {
        e.preventDefault();
        await csrfFetch(`/api/comments/${comment.id}`, {
            method: 'DELETE'
        })
        // const data = await response.json();
        let addComments = [...comments];

        for(let i = 0; i < addComments.length; i++){
            if(addComments[i].id === comment.id){
                addComments.splice(i, 1);
                setComments(addComments);
                return;
            }
        }
    }

    let deleteButton = (
    <div className='comment-action-buttons'>
        <div className='edit-comment-button' onClick={() => setShowEdit(true)}>
            <i className="fas fa-edit"></i>
        </div>
        <div className='delete-comment-button' onClick={deleteComment}>
            <i className="far fa-trash-alt"></i>
        </div>
    </div>
    )

    return (
        <div className='single-comment-div'>
            <span className='first-line-span'>
                <Link to={`/users/${comment.user_id}`}>
                    {comment.User.username}
                </Link>
                {sessionUser.id === comment.user_id && deleteButton}
            </span>
            <h3>{convertToDate(comment.createdAt)}</h3>
            {!showEdit && (
                <p>{comment.comment}</p>
            )}
            {showEdit && (
                <form className='edit-comment-form'>
                    <textarea
                        value={editComment}
                        onChange={(e) => setEditComment(e.target.value)}
                    />
                    <div className='edit-comment-button-div'>
                        <button type='submit'>Submit</button>
                        <button onClick={() => {
                            setEditComment(comment.comment)
                            setShowEdit(false)}
                        }>Cancel</button>
                    </div>
                </form>
            )}

        </div>
    )
}

export default SingleCommentComponent;
