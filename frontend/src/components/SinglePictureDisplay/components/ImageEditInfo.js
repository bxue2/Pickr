import {useState} from 'react';
import {useSelector} from 'react-redux';
import {csrfFetch} from '../../../store/csrf';
import {useHistory} from 'react-router-dom';

const ImageEditInfo = (props) => {
    let history = useHistory();
    const {
        name, setName, description, setDescription, imageOwnerId, pictureid, username
    } = props;

    let sessionUser = useSelector(state => state.session.user)
    let [editName, setEditName] = useState(name);
    let [editDesc, setEditDesc] = useState(description);

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
        <div className='image-info-left_pic-info'>
                <div className='image-owner'>Owner: {username}</div>
                <div className='image-name'>Name: {name}</div>
                <p className='image-desc'>Description: {description}</p>
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

export default ImageEditInfo;
