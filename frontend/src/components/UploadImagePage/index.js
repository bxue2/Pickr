import React, {useState} from 'react';

import UploadActionBar from './UploadActionBar';
import UploadBody from './UploadBody'
import './UploadImagePage.css';
const UploadImagePage = () => {
    // let [imageFile, setImageFile] = useState('');
    let [imageFiles, setImageFiles] = useState([]);
    let [names, setNames] = useState([]);
    let [descriptions, setDescriptions] = useState([]);
    let [selectIndex, setSelectIndex] = useState(-1);

    const stateChildren = {
        imageFiles, setImageFiles, names, setNames, descriptions, setDescriptions, selectIndex, setSelectIndex
    }



    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', name);
    //     formData.append('description', description);
    //     formData.append('image', imageFile);
    //     let response = await csrfFetch('/api/pictures', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //         body: formData
    //     })
    //     const data = await response.json();
    //     console.log(data);
    //     history.push('/');
    // }

    return (
        <>
            <UploadActionBar {...stateChildren}/>
            <UploadBody {...stateChildren}/>
        </>
    );
}

// <form onSubmit={submitHandler}>
//                 <div className='upload-file'>
//                     <input type='file' onChange={setImage}></input>
//                 </div>
//                 <label>
//                     Name:
//                     <input
//                         type='text'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}/>
//                 </label>
//                 <label>
//                     Description:
//                     <input
//                     type='text'
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}/>
//                 </label>
//                 <button type="submit" accept='image/*'>Upload Image</button>
//             </form>

export default UploadImagePage;
