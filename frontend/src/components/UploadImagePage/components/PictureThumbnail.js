
const PictureThumbnail = ( {url} ) => {

    return (
        <div
            className='upload-list_picture-container_image'
            style={{
                backgroundImage:`url(${url})`
            }}
        />
    )
}

export default PictureThumbnail;
