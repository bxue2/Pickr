import CommentInput from "./CommentInput"
import CommentListComponent from "./CommentListComponent"

const CommentComponent = () => {
    return (
        <div className='comment-component'>
            <CommentListComponent />
            <CommentInput />
        </div>
    )
}

export default CommentComponent;
