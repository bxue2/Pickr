import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {csrfFetch} from '../../store/csrf';
import ImageInfoLeft from './components/ImageInfoLeft';
import ImageInfoRight from './components/ImageInfoRight';
import './SinglePictureDisplay.css'

const SinglePictureDisplay = () => {
    let sessionUser = useSelector(state => state.session.user)
    let [imageUrl, setImageUrl] = useState('');
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [username, setUsername] = useState('');
    let [imageOwnerId, setImageOwnerId] = useState(0);

    const {pictureid} = useParams();
    let history = useHistory();

    const passStates = {
        name, setName, description, setDescription, imageOwnerId, pictureid, username
    }

    useEffect(() => {
        async function fetchData(){
            let response = await csrfFetch(`/api/pictures/${pictureid}`);
            let data = await response.json();
            setImageUrl(data.image_url);
            setName(data.name);
            setDescription(data.description);
            setImageOwnerId(data.user_id);
            setUsername(data.user_name);
        }
        fetchData();
    }, [pictureid])

    return (
        <>
            <div className='img-container'>
                {imageUrl && (
                <img alt={name} src={imageUrl}></img>
                )}
            </div>

            <div className='image-bottom-section'>
                <ImageInfoLeft {...passStates}/>
                <ImageInfoRight />
            </div>


        </>
    )
}

export default SinglePictureDisplay;
