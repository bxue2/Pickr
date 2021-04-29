import {useState} from 'react';
import CommentInput from "./CommentInput"
import CommentListComponent from "./CommentListComponent"

const CommentComponent = ({pictureid}) => {
    const [comments, setComments] = useState([]);

    return (
        <div className='comment-component'>
            <CommentListComponent />
            <CommentInput comments={comments} setComments={setComments} pictureid={pictureid}/>
        </div>
    )
}

export default CommentComponent;
