import PictureThumbnail from './PictureThumbnail';
import PictureNameInput from './PictureNameInput';
const UploadBodyFileList = (props) => {
    const {
        imageUrls, imageFiles, names, descriptions, selectIndex, changeName, setDescriptions, setSelectIndex
    } = props;

    //Clicks the hidden add file input
    const addImageButton = (e) => {
        document.getElementById("add-file").click();
    }

    //Prevents form from submitting
    const cancelSubmit = (e) => {
        e.preventDefault();
    }

    let bodyType = (
        <>
            <div className='addImagePrompt' onClick={addImageButton}>
                Add Some Pictures!
            </div>
        </>
    )
    if(imageFiles.length > 0){
        bodyType = (
                imageFiles.map((picture, index) => {
                    // var url = URL.createObjectURL(picture);
                    let selectedClass = (selectIndex !== index) ? 'upload-list_picture-container' : 'upload-list_picture-container active'
                    return (
                        <div key={index}
                            className={selectedClass} onClick={(e) => {
                                e.stopPropagation();
                                setSelectIndex(index);
                            }}>
                            <PictureThumbnail url={imageUrls[index]}/>
                            <div>
                                <form className='picture-container_form' onSubmit={cancelSubmit}>
                                    <PictureNameInput index={index} names={names} changeName={changeName}/>
                                    <textarea
                                        className='picture-container_field'
                                        placeholder='Description'
                                        value={descriptions[index]}
                                        onChange={(e) => {
                                            let newDesc = [...descriptions];
                                            descriptions[index] = e.target.value;
                                            setDescriptions(newDesc);
                                        }}
                                    />
                                </form>
                            </div>
                        </div>
                    )
                })

        )
    }
    return (
        <>
            <div className='upload-body-file-list' onClick={
                (e) => {
                    setSelectIndex(-1);
                }
            }>
                {bodyType}
            </div>
        </>
    )
}

export default UploadBodyFileList;
