import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import CreateAlbumSidebar from './components/CreateAlbumSidebar';
import CreateAlbumBody from './components/CreateAlbumBody';
import CreateAlbumFooterList from './components/CreateAlbumFooterList';
import { csrfFetch } from '../../store/csrf';

import './CreateAlbum.css';
const CreateAlbumPage = () => {
    let sessionUser = useSelector(state => state.session.user)
    const [userData, setUserData] = useState({});
    const [unusedPictures, setUnusedPictures] = useState([]);
    const [addedPictures, setAddedPictures] = useState([]);

    useEffect(() => {
        async function getUserData(){
            let profileUser = await csrfFetch(`/api/users/${sessionUser.id}`)
            let data = await profileUser.json();
            setUserData(data);
            setUnusedPictures(data.Pictures)
        }
        getUserData();
    }, [])

    return (
        <>
            <div className='create-album-container'>
                <CreateAlbumSidebar />
                <CreateAlbumBody />
            </div>
            <CreateAlbumFooterList unusedPictures={unusedPictures} />
        </>
    )

}

export default CreateAlbumPage;
