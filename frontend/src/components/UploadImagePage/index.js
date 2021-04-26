import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { Redirect } from 'react-router';
import {csrfFetch} from '../../store/csrf'

import './UploadImagePage.css';
const UploadImagePage = () => {
    let [imageFile, setImageFile] = useState('');
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let sessionUser = useSelector(state => state.session.user)

    const setImage = (e) => {
        setImageFile(e.target.files[0]);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('file', imageFile);
        let response = await csrfFetch('/pictures', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        })
        const data = await response.json();

        return (
            <Redirect to="/" />
        )
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='upload-file'>
                    <input type='file' onChange={setImage}></input>
                </div>
                <label>
                    Name:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Description:
                    <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <button type="submit">Upload Image</button>
            </form>

        </>
    );
}

export default UploadImagePage;
