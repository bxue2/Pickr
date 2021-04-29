const CreateAlbumFooterList = ({unusedPictures}) => {

    //Drag and Drop functions
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const startDrag = (e) => {

    }

    return (
        <div className='create-album-footer'>
            <div className='create-album-footer_actions'>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input type='text' placeholder='Search (maybe?)'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div
                className='create-album-footer_list'
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
            >
                {unusedPictures.map((picture) => {
                    return (
                            <div
                                key={picture.id}
                                draggable
                                className='create-album_picture-container'
                                onDragStart={(e) => {
                                    e.dataTransfer.setData('picture', picture);
                                    e.dataTransfer.setData('unused', true)
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
                })}
            </div>
        </div>
    )
}

export default CreateAlbumFooterList;
