import {useHistory} from 'react-router-dom';
import {csrfFetch} from '../../../store/csrf';

const CreateAlbumSidebar = ({albumName, setAlbumName, albumDesc, setAlbumDesc, addedPictures}) => {
    let history = useHistory();

    const saveAlbum = async (e) => {
        e.preventDefault();
        if(addedPictures.length > 0){
            let pictureIds = addedPictures.map((picture) => picture.id);
            await csrfFetch('/api/albums', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: albumName, description: albumDesc, pictures: pictureIds})
            });
            // const data = await response.json();
            history.push('/');
        }
    }

    return (
        <div className='create-album-sidebar'>
            <form className='create-album-sidebar_form' onSubmit={saveAlbum}>
                <input
                    type='text'
                    className='create-album-sidebar_name'
                    placeholder='Name'
                    value={albumName}
                    onChange={(e) => {
                        setAlbumName(e.target.value)
                    }}
                />
                <textarea
                    className='create-album-sidebar_description'
                    placeholder='Description'
                    value={albumDesc}
                    onChange={(e) => {
                        setAlbumDesc(e.target.value)
                    }}
                />
                <button className='create-album-sidebar_submit-btn' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default CreateAlbumSidebar;
