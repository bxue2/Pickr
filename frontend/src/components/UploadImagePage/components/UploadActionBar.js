import {useHistory} from 'react-router-dom';
import {csrfFetch} from '../../../store/csrf';

const UploadActionBar = (props) => {
    let history = useHistory();
    const {
        selectIndex, setSelectIndex, imageFiles, imageUrls, names, descriptions,
        setImageFiles, setImageUrls, setNames, setDescriptions, tags, setTags
    } = props;

    const submitHandler = async (e) => {
        e.preventDefault();
        await Promise.all(imageFiles.map(async (pic, index) => {
            const formData = new FormData();
            formData.append('name', names[index]);
            formData.append('description', descriptions[index]);
            formData.append('image', pic);
            formData.append('tags', JSON.stringify(tags[index]));
            await csrfFetch('/api/pictures', {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData
            })
            // const data = await response.json();
            // console.log(data);
        }))
        history.push('/');
    }

    const addImages = (e) => {
        let newImageFiles = [...imageFiles];
        let newNames = [...names];
        let newDesc = [...descriptions];
        let newImageUrls = [...imageUrls];
        let newTags = [...tags];
        for(let i = 0; i < e.target.files.length; i++){
            newImageFiles.push(e.target.files[i]);
            newNames.push(e.target.files[i].name);
            newDesc.push("");
            newImageUrls.push(URL.createObjectURL(e.target.files[i]));
            newTags.push([]);
        }
        setImageFiles(newImageFiles);
        setNames(newNames);
        setDescriptions(newDesc);
        setImageUrls(newImageUrls);
        setTags(newTags);
    }

    const addImageButton = (e) => {
        document.getElementById("add-file").click();
    }

    const removeImage = () => {
        if(selectIndex >= 0){
            let newImageFiles = [...imageFiles];
            let newNames = [...names];
            let newDesc = [...descriptions];
            let newImageUrls = [...imageUrls];
            let newTags = [...tags];
            newImageFiles.splice(selectIndex, 1);
            newNames.splice(selectIndex, 1);
            newDesc.splice(selectIndex, 1);
            newImageUrls.splice(selectIndex, 1);
            newTags.splice(selectIndex, 1);
            setImageFiles(newImageFiles);
            setNames(newNames);
            setDescriptions(newDesc);
            setImageUrls(newImageUrls);
            setTags(newTags);
            setSelectIndex(-1);
        }

    }

    return (
        <div className='upload-action-bar'>
            <ul className='upload-action-bar_left'>
                <li>
                    <button className='upload-action-bar_button' onClick={addImageButton}>
                        <i className="fas fa-plus" style={{color:'green'}}/>
                        {" Add"}
                    </button>
                    <input hidden id='add-file' type='file' multiple accept='image/*' onChange={addImages}></input>
                </li>
                {props.imageFiles.length > 0 && (
                    <>
                        <li>
                            <button className='upload-action-bar_button' onClick={removeImage}>
                                <i className="fas fa-minus" style={{color:'red'}}/>
                                {" Remove"}
                            </button>
                        </li>
                    </>
                )}
            </ul>
            {props.imageFiles.length > 0 && (
                <form className='upload-button' onSubmit={submitHandler}>
                    <button type='submit' >Upload {props.imageFiles.length} Pictures</button>
                </form>
            )}
        </div>
    )
}

export default UploadActionBar;
