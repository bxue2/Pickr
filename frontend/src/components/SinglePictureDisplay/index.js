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
    let [imageOwnerId, setImageOwnerId] = useState(0);

    let [editName, setEditName] = useState(name);
    let [editDesc, setEditDesc] = useState(description);
    const {pictureid} = useParams();
    let history = useHistory();

    useEffect(() => {
        async function fetchData(){
            let response = await csrfFetch(`/api/pictures/${pictureid}`);
            let data = await response.json();
            setImageUrl(data.image_url);
            setName(data.name);
            setDescription(data.description);
            setImageOwnerId(data.user_id)
        }
        fetchData();
    }, [pictureid])


    const deletePicture = async (e) => {
        let response = await csrfFetch(`/api/pictures/${pictureid}`, {
            method:'DELETE'
        })
        //TODO: Handle logic if delete fails?
        if(response.ok){
            history.push('/');
        }
    }

    //temp function for testing editing picture
    const editHandler = async (e) => {
        e.preventDefault();
        let response = await csrfFetch(`/api/pictures/${pictureid}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: editName, description: editDesc})
        });
        let data = await response.json();
        setName(data.name);
        setDescription(data.description);
    }

    return (
        <>
            <div className='img-container'>
                {imageUrl && (
                <img alt={name} src={imageUrl}></img>
                )}
            </div>
            <div className='image-info'>
                <div className='image-name'>{name}</div>
                <div className='image-desc'>{description}</div>
                <div className='image-owner'>Owner: {imageOwnerId}</div>
                <button onClick={deletePicture}>Delete</button>
            </div>

            {imageOwnerId === sessionUser.id && (
            <form onSubmit={editHandler}>
                <label>
                    Name:
                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                </label>
                <label>
                    Description:
                    <input type="text" value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                </label>
                <button type="submit">Edit Picture</button>
            </form>
            )}

        </>
    )
}

export default SinglePictureDisplay;
