import React, {useState} from 'react';

import UploadActionBar from './components/UploadActionBar';
import UploadBody from './components/UploadBody'
import './UploadImagePage.css';
const UploadImagePage = () => {
    let [imageFiles, setImageFiles] = useState([]);
    let [imageUrls, setImageUrls] = useState([]);
    let [names, setNames] = useState([]);
    let [tags, setTags] = useState([]);
    let [descriptions, setDescriptions] = useState([]);
    let [selectIndex, setSelectIndex] = useState(-1);
    let [uploading, setUploading] = useState(false);
    const stateChildren = {
        imageUrls, setImageUrls, imageFiles, setImageFiles, names, setNames,
        descriptions, setDescriptions, selectIndex, setSelectIndex, tags, setTags
    }

    return (
        <>
            {uploading && (
                <div className='upload-overlay'></div>
            )}
            <UploadActionBar {...stateChildren}/>
            <UploadBody {...stateChildren}/>
        </>
    );
}


export default UploadImagePage;
