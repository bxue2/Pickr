import {Link} from 'react-router-dom';
import {convertToDate} from '../../../utils/DateTimeConvert';
import {useSelector} from 'react-redux'
import {csrfFetch} from '../../../store/csrf';
const SingleCommentComponent = ({comments, setComments, comment}) => {
    let sessionUser = useSelector(state => state.session.user)

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
    <div className='delete-comment-button' onClick={deleteComment}>
            <i className="far fa-trash-alt"></i>
    </div>)

    return (
        <div className='single-comment-div'>
            <span className='first-line-span'>
                <Link to={`/users/${comment.user_id}`}>
                    {comment.User.username}
                </Link>
                {sessionUser.id === comment.user_id && deleteButton}
            </span>
            <h3>{convertToDate(comment.createdAt)}</h3>
            <p>{comment.comment}</p>
        </div>
    )
}

export default SingleCommentComponent;
