import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {csrfFetch} from '../../store/csrf';
import ImageInfoLeft from './components/ImageInfoLeft';
import ImageInfoRight from './components/ImageInfoRight';
import './SinglePictureDisplay.css'

const SinglePictureDisplay = () => {
    let [imageUrl, setImageUrl] = useState('');
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [username, setUsername] = useState('');
    let [imageOwnerId, setImageOwnerId] = useState(0);
    let [totalComments, setTotalComments] = useState(0);
    let [tags, setTags] = useState([]);
    let [createdAt, setCreatedAt] = useState('');
    const {pictureid} = useParams();

    const passStates = {
        name, setName, description, setDescription, imageOwnerId, pictureid, username, totalComments, setTotalComments
    }

    useEffect(() => {
        async function fetchData(){
            let response = await csrfFetch(`/api/pictures/${pictureid}`);
            let data = await response.json();
            setImageUrl(data.image_url);
            setName(data.name);
            setDescription(data.description);
            setImageOwnerId(data.user_id);
            setUsername(data.User.username);
            setTags(data.Tags);
            setCreatedAt(data.createdAt);
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
                <ImageInfoRight createdAt={createdAt} totalComments={totalComments} tags={tags}/>
            </div>


        </>
    )
}

export default SinglePictureDisplay;
