import {useHistory} from 'react-router-dom';
const AlbumComponentBody = ({albums}) => {
    let history = useHistory();

    const redirectToAlbum = (album) => {
        history.push(`/albums/${album.id}`)
    }
    let content = (
        <span className='no-album-text'>No albums</span>
    )
    if(albums.length > 0){
        content = (
            albums.map((album) => {
                return (
                    <div
                        key={album.id}
                        className='profile_album-container'
                        onClick={(e) => {
                            e.preventDefault()
                            redirectToAlbum(album)
                        }}
                    >
                            <span>{album.name}</span>
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
