const CreateAlbumFooterList = ({unusedPictures}) => {

    return (
        <div className='create-album-footer'>
            <div className='create-album-footer_actions'>
                <form>
                    <input type='text' placeholder='Search'/>
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
                            />
                    )
                })}
            </div>
        </div>
    )
}

export default CreateAlbumFooterList;
