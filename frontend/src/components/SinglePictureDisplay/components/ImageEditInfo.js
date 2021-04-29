import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {csrfFetch} from '../../../store/csrf';
import {useHistory, Link} from 'react-router-dom';

const ImageEditInfo = (props) => {
    let history = useHistory();
    const {
        name, setName, description, setDescription, imageOwnerId, pictureid, username
    } = props;

    let sessionUser = useSelector(state => state.session.user)
    let [editName, setEditName] = useState('');
    let [editDesc, setEditDesc] = useState('');
    let [editable, setEditable] = useState(false);

    useEffect(() => {
        setEditName(name);
        setEditDesc(description);
    }, [editable, name, description])

    const deletePicture = async (e) => {
        let response = await csrfFetch(`/api/pictures/${pictureid}`, {
            method:'DELETE'
        })
        //TODO: Handle logic if delete fails?
        if(response.ok){
            history.push('/');
        }
    }

    const cancelEdit = (e) => {
        setEditable(false);
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
        setEditable(false);
    }

    let picInfo = (
        <>
            <div className='image-name'>Name: {name}</div>
            <p className='image-desc'>Description: {description}</p>
        </>
    )

    if(editable){

        picInfo=(
            <>
            <form className='edit-pic-form' onSubmit={editHandler}>
                <label>
                    <input className='edit-pic-form_name-input' type="text" placeholder='Add name' value={editName} onChange={(e) => setEditName(e.target.value)}/>
                </label>
                <label>
                    <textarea className='edit-pic-form_desc-input' placeholder='Add description' value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                </label>
                <div className='edit-pic-form_buttons'>
                    <button onClick={deletePicture}>Delete</button>
                    <button type="submit">Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            </form>
            </>
        )
    } else{
        picInfo=(
            <div className='pic-info-toggle' onClick={(e) => {
                if(imageOwnerId === sessionUser.id && !editable){
                    setEditable(true)
                }
            }}>
                <div className='image-name'>Name: {name}</div>
                <div className='image-desc'>
                    <span>{"Description: "}</span>
                    {description}</div>
            </div>
        );
    }


    return (
        <>
        <div className='image-info-left_pic-info'>
            <div className='image-owner'>{"Owner: "}
                <Link to={`/users/${imageOwnerId}`}>{username}</Link>
            </div>
            {picInfo}
        </div>


        </>
    )
}

export default ImageEditInfo;
