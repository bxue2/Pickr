import React, {useState} from 'react';

import UploadActionBar from './components/UploadActionBar';
import UploadBody from './components/UploadBody'
import './UploadImagePage.css';
const UploadImagePage = () => {
    let [imageFiles, setImageFiles] = useState([]);
    let [imageUrls, setImageUrls] = useState([]);
    let [names, setNames] = useState([]);
    let [descriptions, setDescriptions] = useState([]);
    let [selectIndex, setSelectIndex] = useState(-1);

    const stateChildren = {
        imageUrls, setImageUrls, imageFiles, setImageFiles, names, setNames, descriptions, setDescriptions, selectIndex, setSelectIndex
    }

    return (
        <>
            <UploadActionBar {...stateChildren}/>
            <UploadBody {...stateChildren}/>
        </>
    );
}


export default UploadImagePage;
