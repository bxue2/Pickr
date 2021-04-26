import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {csrfFetch} from '../../store/csrf'
import './SinglePictureDisplay.css'

const SinglePictureDisplay = () => {
    let sessionUser = useSelector(state => state.session.user)
    let [imageUrl, setImageUrl] = useState('');
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    const {pictureid} = useParams();
    let history = useHistory();

    useEffect(() => {
        async function fetchData(){
            let response = await csrfFetch(`/api/pictures/${pictureid}`);
            let data = await response.json();
            setImageUrl(data.image_url);
            setName(data.name);
            setDescription(data.description);
        }
        fetchData();
    }, [])


    const deletePicture = async (e) => {
        let response = await csrfFetch(`/api/pictures/${pictureid}`, {
            method:'DELETE'
        })
        //TODO: Handle logic if delete fails?
        history.push('/');
    }
    return (
        <>
            {imageUrl && (
            <>
                <div className='img-container'>
                    <img alt="image not found" src={imageUrl}></img>
                </div>
                <button onClick={deletePicture}>Delete</button>
            </>
            )}
        </>
    )
}

export default SinglePictureDisplay;
