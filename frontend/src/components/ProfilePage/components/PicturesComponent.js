import {useHistory} from 'react-router-dom';
const PicturesComponent = ({pictures}) => {
    let history = useHistory();

    const goToPic = (pictureid) => {
        history.push(`/pictures/${pictureid}`);
    }
    return (
        <>
            <div className='profile_all-user-pictures'>
                {pictures.map((picture) => {
                    return (
                            <div
                                key={picture.id}
                                className='profile_picture-container'
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

export default PicturesComponent;
