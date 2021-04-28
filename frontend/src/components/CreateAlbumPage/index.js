import {useState} from 'react';
import CreateAlbumSidebar from './components/CreateAlbumSidebar';
import CreateAlbumBody from './components/CreateAlbumBody';
import CreateAlbumFooterList from './components/CreateAlbumFooterList';

import './CreateAlbum.css';
const CreateAlbumPage = () => {

    return (
        <>
            <div className='create-album-container'>
                <CreateAlbumSidebar />
                <CreateAlbumBody />
            </div>
            <CreateAlbumFooterList />
        </>
    )

}

export default CreateAlbumPage;
