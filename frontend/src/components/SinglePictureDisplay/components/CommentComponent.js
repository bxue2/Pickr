import {useEffect, useState} from 'react';
import {csrfFetch} from '../../../store/csrf';
import CommentInput from "./CommentInput"
import CommentListComponent from "./CommentListComponent"

const CommentComponent = ({pictureid, username}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchComments(){
            const response = await csrfFetch(`/api/comments/picture/${[pictureid]}`)
            const data = await response.json();
            setComments(data);
        }
        fetchComments();
    },[pictureid])

    return (
        <div className='comment-component'>
            <CommentListComponent comments={comments} username={username}/>
            <CommentInput comments={comments} setComments={setComments} pictureid={pictureid}/>
        </div>
    )
}

export default CommentComponent;
