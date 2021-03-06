import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {csrfFetch} from '../../store/csrf';
import AlbumDisplayHeader from './components/AlbumDisplayHeader';
import AlbumDisplayPhotoList from './components/AlbumDisplayPhotoList';
import './AlbumDisplayPage.css';

const AlbumDisplayPage = () => {
    const [albumName, setAlbumName] = useState('');
    const [description, setDescription] = useState('');
    const [albumOwnerId, setAlbumOwnerId] = useState(-1);
    const [username, setUsername] = useState('');
    const [pictures, setPictures] = useState([]);
    const {albumid} = useParams();

    const states = {
        pictures, albumName, setAlbumName, description, setDescription, albumOwnerId, setAlbumOwnerId, username, setUsername, albumid
    }

    useEffect(() => {
        async function fetchAlbum(){
            let response = await csrfFetch(`/api/albums/${albumid}`);
            let data = await response.json();
            setAlbumName(data.name);
            setDescription(data.description);
            setAlbumOwnerId(data.user_id);
            setUsername(data.User.username);
            setPictures(data.Pictures)
        }
        fetchAlbum();
    }, [albumid])

    return (
        <div className='album-display'>
                <AlbumDisplayHeader {...states}/>
                <AlbumDisplayPhotoList pictures={pictures}/>
        </div>
    )
}

export default AlbumDisplayPage;
