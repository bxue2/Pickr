import {useHistory} from 'react-router-dom';
const AlbumComponentHeader = () => {
    const history = useHistory();
    const goToCreateAlbum = () => {
        history.push('/create-album')
    }

    return (
        <div className='album-component-header'>
            <div className='new-album-button' onClick={goToCreateAlbum}>
                <i className="fas fa-folder-plus"/>
                {" New Album"}
            </div>
        </div>
    )
}

export default AlbumComponentHeader;
