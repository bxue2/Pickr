//Image name, desc, user, + comment section


import CommentComponent from './CommentComponent';

import ImageEditInfo from './ImageEditInfo';

const ImageInfoLeft = (props) => {
    // const {
    //     name, setName, description, setDescription, imageOwnerId, pictureid, username
    // } = props;


    return (
        <div className='image-info-left'>
            <ImageEditInfo {...props}/>

            <CommentComponent pictureid={props.pictureid} username={props.username}  setTotalComments={props.setTotalComments}/>
        </div>
    )
}

export default ImageInfoLeft;
