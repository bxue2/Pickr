
const PicturesComponent = ({pictures}) => {

    return (
        <>
            <div className='profile_all-user-pictures'>
                {pictures.map((picture) => {
                    return (
                            <div
                                key={picture.id}
                                className='profile_picture-container'
                                backgroundImage={picture.imageUrl}
                            />
                    )
                })}
            </div>
        </>
    );
}

export default PicturesComponent;
