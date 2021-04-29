
const AlbumBodyPicture = ({picture, index}) => {
    return (
        <div
            key={picture.id}
            draggable
            className='create-album_picture-container'
            onDragStart={(e) => {
                e.dataTransfer.setData('index', picture.id);
                e.dataTransfer.setData('used', true)
            }}
            style={{
                backgroundImage: `url(${picture.image_url})`
            }}
        >
            <div className='picture-container_name-tip'>
                {picture.name}
            </div>
        </div>
    )
}
