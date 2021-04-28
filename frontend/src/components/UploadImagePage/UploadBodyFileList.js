
const UploadBodyFileList = (props) => {
    const {
        imageFiles, names, descriptions, selectIndex, setNames, setDescriptions, setSelectIndex
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
                    var url = URL.createObjectURL(picture);
                    let selectedClass = (selectIndex !== index) ? 'upload-list_picture-container' : 'upload-list_picture-container active'
                    return (
                        <div key={index}
                            className={selectedClass} onClick={(e) => {
                                e.stopPropagation();
                                setSelectIndex(index);
                            }}>
                            <div
                                className='upload-list_picture-container_image'
                                style={{
                                    backgroundImage:`url(${url})`
                                }}
                            />
                            <form className='picture-container_form' onSubmit={cancelSubmit}>
                                <input
                                    className='picture-oontainer_field'
                                    placeholder='Name'
                                    value={names[index]}
                                    onChange={(e) => {
                                        let newNames = [...names];
                                        names[index] = e.target.value;
                                        setNames(newNames);
                                    }}
                                />
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
