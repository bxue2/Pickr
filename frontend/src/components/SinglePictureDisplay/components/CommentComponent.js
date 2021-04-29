import {useState} from 'react';
import CommentInput from "./CommentInput"
import CommentListComponent from "./CommentListComponent"

const CommentComponent = () => {
    const [comments, setComments] = useState([]);

    return (
        <div className='comment-component'>
            <CommentListComponent />
            <CommentInput />
        </div>
    )
}

export default CommentComponent;
