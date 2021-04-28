import AlbumComponentHeader from './AlbumComponentHeader';
const AlbumComponent = ({albums}) => {
    console.log(albums);
    return (
        <>
            <div className='profile_all-user-allbums'>
                <AlbumComponentHeader />
                {albums.map((album) => {
                    return (
                            <div
                                key={album.id}
                                className='profile_album-container'
                            >
                                <span>{album.name}</span>
                            </div>
                    )
                })}
            </div>
        </>
    );
}

export default AlbumComponent;
