import SingleCommentComponent from "./SingleCommentComponent";

const CommentList = ({comments, setComments}) => {
    return (
        <div className='comment-list'>
            {comments.map((comment, index) => {
                return (<SingleCommentComponent key={index} comments={comments} setComments={setComments} comment={comment}/>)
            })}
        </div>
    )
}

export default CommentList;
