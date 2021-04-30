import {useState} from 'react';
import {useParams} from 'react-router-dom';

const AlbumDisplayPage = () => {
    const [albumName, setAlbumName] = useState('');
    const [description, setDescription] = useState('');
    const {albumid} = useParams();
    useEffect(() => {
        async function fetchAlbum(){
            let response = await csrfFetch(`/api/albums/${pictureid}`);
            let data = await response.json();
            setImageUrl(data.image_url);
            setName(data.name);
            setDescription(data.description);
            setImageOwnerId(data.user_id);
            setUsername(data.user_name);
        }
        fetchAlbum();
    }, [pictureid])

    return (
        <div className='album-display'>

        </div>
    )
}

export default AlbumDisplayPage;
