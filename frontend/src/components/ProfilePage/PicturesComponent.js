
const PicturesComponent = ({pictures}) => {

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
                            />
                    )
                })}
            </div>
        </>
    );
}

export default PicturesComponent;
