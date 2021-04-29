
const SingleCommentComponent = ({username, comment}) => {
    return (
        <div className='single-comment-div'>
            <h2>{username}</h2>
            <h3>{comment.createdAt}</h3>
            <p>{comment.comment}</p>
        </div>
    )
}

export default SingleCommentComponent;
