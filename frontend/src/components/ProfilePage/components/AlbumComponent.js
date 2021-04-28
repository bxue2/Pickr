import AlbumComponentBody from './AlbumComponentBody';
import AlbumComponentHeader from './AlbumComponentHeader';
const AlbumComponent = ({albums}) => {
    console.log(albums);
    return (
        <>
            <div className='profile_all-user-allbums'>
                <AlbumComponentHeader />
                <AlbumComponentBody albums={albums}/>
            </div>
        </>
    );
}

export default AlbumComponent;
