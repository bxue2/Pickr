import SingleCommentComponent from "./SingleCommentComponent";

const CommentList = ({comments, username}) => {
    return (
        <div className='comment-list'>
            {comments.map((comment) => {
                <SingleCommentComponent username={username} comment={comment}/>
            })}
        </div>
    )
}

export default CommentList;
