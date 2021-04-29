
const CommentInput = () => {
    const submitComment = () => {

    }
    return (
        <div className='comment-section'>
            <form className='add-comment-form' onSubmit={submitComment}>
                <textarea placeholder='Add comment'></textarea>
                <button type='submit'>Add Comment</button>
            </form>
        </div>
    )
}

export default CommentInput;
