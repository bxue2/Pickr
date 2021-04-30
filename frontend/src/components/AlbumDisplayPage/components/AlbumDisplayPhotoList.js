import {useHistory} from 'react-router-dom';

//Basically a copy of PicturesComponent from Profile Page, might want to refactor later
const AlbumDisplayPhotoList = ({pictures}) => {
    let history = useHistory();

    const goToPic = (pictureid) => {
        history.push(`/pictures/${pictureid}`);
    }
    return (
        <>
            <div className='album-display-pictures'>
                {pictures.map((picture) => {
                    return (
                            <div
                                key={picture.id}
                                className='album-display_picture-container'
                                style={{
                                    backgroundImage: `url(${picture.image_url})`
                                }}
                                onClick={() => {goToPic(picture.id)}}
                            />
                    )
                })}
            </div>
        </>
    );
}

export default AlbumDisplayPhotoList;
