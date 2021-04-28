import {useHistory} from 'react-router-dom';
import {csrfFetch} from '../../store/csrf';

const UploadActionBar = (props) => {
    let history = useHistory();
    const {
        imageFiles, names, descriptions
    } = props;

    const submitHandler = async (e) => {
        e.preventDefault();
        await Promise.all(imageFiles.map(async (pic, index) => {
            const formData = new FormData();
            formData.append('name', names[index]);
            formData.append('description', descriptions[index]);
            formData.append('image', pic);
            let response = await csrfFetch('/api/pictures', {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData
            })
            const data = await response.json();
            console.log(data);
        }))
        history.push('/');
    }

    const addImages = (e) => {
        props.setImageFiles([...props.imageFiles, ...e.target.files]);
    }

    return (
        <div className='upload-action-bar'>
            <ul>
                <li>
                    <button>
                        <i className="fas fa-plus" />
                        Add
                    </button>
                    <input type='file' multiple accept='image/*' onChange={addImages}></input>
                </li>
                {props.imageFiles.length > 0 && (
                    <>
                        <li>
                            Remove
                        </li>
                    </>
                )}
            </ul>
            {props.imageFiles.length > 0 && (
                <form onSubmit={submitHandler}>
                    <button type='submit' >Upload {props.imageFiles.length} Pictures</button>
                </form>
            )}
        </div>
    )
}

export default UploadActionBar;
