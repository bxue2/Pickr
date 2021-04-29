
const AlbumComponentBody = ({albums}) => {
    let content = (
        <span className='no-album-text'>No albums</span>
    )
    if(albums.length > 0){
        content = (
            albums.map((album) => {
                console.log(album);
            return (
                <div
                    key={album.id}
                    className='profile_album-container'
                >
                    <div className='profile_album-container_album-cover'>
                        <span>{album.name}</span>
                    </div>
                </div>
            )
        }))
    }
    return (
        <div className='album-component-body'>
            {content}
        </div>
    )
}

export default AlbumComponentBody;
