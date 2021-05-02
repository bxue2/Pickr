import {Link} from 'react-router-dom';
import {convertToDate} from '../../../utils/DateTimeConvert';
const SingleCommentComponent = ({username, comment}) => {
    return (
        <div className='single-comment-div'>
            <Link to={`/users/${comment.user_id}`}>{username}</Link>
            <h3>{convertToDate(comment.createdAt)}</h3>
            <p>{comment.comment}</p>
        </div>
    )
}

export default SingleCommentComponent;
