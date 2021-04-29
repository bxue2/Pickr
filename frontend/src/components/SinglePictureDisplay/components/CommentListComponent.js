import SingleCommentComponent from "./SingleCommentComponent";

const CommentList = ({comments, username}) => {
    return (
        <div className='comment-list'>
            {comments.map((comment, index) => {
                return (<SingleCommentComponent key={index} username={username} comment={comment}/>)
            })}
        </div>
    )
}

export default CommentList;
