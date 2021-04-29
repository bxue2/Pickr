//Image name, desc, user, + comment section


import CommentComponent from './CommentComponent';

import ImageEditInfo from './ImageEditInfo';

const ImageInfoLeft = (props) => {
    const {
        name, setName, description, setDescription, imageOwnerId, pictureid
    } = props;


    return (
        <div className='image-info-left'>
            <ImageEditInfo {...props}/>

            <CommentComponent />
        </div>
    )
}

export default ImageInfoLeft;
