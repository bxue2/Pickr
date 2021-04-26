import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {csrfFetch} from '../../store/csrf'

const SinglePicturePage = () => {
    let sessionUser = useSelector(state => state.session.user)
    let [imageUrl, setImageUrl] = useState('');
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    const {pictureid} = useParams();
    let history = useHistory();

    useEffect(() => {
        async function fetchData(){
            let response = await csrfFetch(`/api/pictures/${pictureid}`);
            let { picture } = response;
            setImageUrl(picture.image_url);
            setName(picture.name);
            setDescription(picture.description);
        }
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
            <div className='img-container'>
                <img alt="image not found" src={imageUrl}></img>
            </div>
            <button onClick={deletePicture}>Delete</button>
        </>
    )
}

export default SinglePicturePage;
