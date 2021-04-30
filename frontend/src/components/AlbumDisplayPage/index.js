import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {csrfFetch} from '../../store/csrf';

const AlbumDisplayPage = () => {
    const [albumName, setAlbumName] = useState('');
    const [description, setDescription] = useState('');
    const [albumOwnerId, setAlbumOwnerId] = useState(-1);
    const [username, setUsername] = useState('');
    const {albumid} = useParams();

    useEffect(() => {
        async function fetchAlbum(){
            let response = await csrfFetch(`/api/albums/${albumid}`);
            let data = await response.json();
            setAlbumName(data.name);
            setDescription(data.description);
            setAlbumOwnerId(data.user_id);
            setUsername(data.user_name);
        }
        fetchAlbum();
    }, [albumid])

    return (
        <div className='album-display'>

        </div>
    )
}

export default AlbumDisplayPage;
