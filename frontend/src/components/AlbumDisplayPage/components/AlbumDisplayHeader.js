
const AlbumDisplayHeader = ({albumName, description, username}) => {
    return (
        <div className='album-display-header'>
            <div className='album-header_info'>
                <h3>Album: {albumName}</h3>
                <h3>Owner: {username}</h3>
                <p>Description: {description}</p>
            </div>
        </div>
    )
}

export default AlbumDisplayHeader;
