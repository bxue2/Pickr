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
    const [albumName, setAlbumName] = useState('');
    const [albumDesc, setAlbumDesc] = useState('');
    const [unusedPictures, setUnusedPictures] = useState([]);
    const [addedPictures, setAddedPictures] = useState([]);

    let albumStates = {
        albumName, setAlbumName, albumDesc, setAlbumDesc, userData
    }
    let pictureStates = {
        unusedPictures, setUnusedPictures, addedPictures, setAddedPictures
    }

    useEffect(() => {
        async function getUserData(){
            let profileUser = await csrfFetch(`/api/users/${sessionUser.id}`)
            let data = await profileUser.json();
            setUserData(data);
            setUnusedPictures(data.Pictures)
        }
        getUserData();
    }, [sessionUser.id])

    return (
        <div className='create-album-container'>
            <div className='create-album-body-container'>
                <CreateAlbumSidebar {...albumStates}/>
                <CreateAlbumBody {...pictureStates} />
            </div>
            <CreateAlbumFooterList {...pictureStates} />
        </div>
    )

}

export default CreateAlbumPage;
