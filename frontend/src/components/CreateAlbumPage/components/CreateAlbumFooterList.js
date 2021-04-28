const CreateAlbumFooterList = ({unusedPictures}) => {

    return (
        <div className='create-album-footer'>
            <div className='create-album-footer_actions'>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input type='text' placeholder='Search (maybe?)'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='create-album-footer_list'>
            {unusedPictures.map((picture) => {
                    return (
                            <div
                                key={picture.id}
                                className='create-album_picture-container'
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
