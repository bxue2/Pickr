import React, {useState, useCallback} from 'react';

import UploadActionBar from './components/UploadActionBar';
import UploadBody from './components/UploadBody'
import './UploadImagePage.css';
const UploadImagePage = () => {
    // let [imageFile, setImageFile] = useState('');
    let [imageFiles, setImageFiles] = useState([]);
    let [imageUrls, setImageUrls] = useState([]);
    let [names, setNames] = useState([]);
    let [descriptions, setDescriptions] = useState([]);
    let [selectIndex, setSelectIndex] = useState(-1);

    const changeName = useCallback((value, index) => {
        let newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    }, [names])


    const stateChildren = {
        imageUrls, setImageUrls, imageFiles, setImageFiles, names, setNames, changeName, descriptions, setDescriptions, selectIndex, setSelectIndex
    }

    return (
        <>
            <UploadActionBar {...stateChildren}/>
            <UploadBody {...stateChildren}/>
        </>
    );
}


export default UploadImagePage;
