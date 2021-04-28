
const UploadBodyFileList = (props) => {
    const {
        imageFiles, names, descriptions, selectIndex, setNames, setDescriptions
    } = props;

    const addImageButton = (e) => {
        document.getElementById("add-file").click();
    }

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
            <form onSubmit={cancelSubmit}>
                {imageFiles.map((picture, index) => {
                    var url = URL.createObjectURL(picture);
                    return (
                        <div key={index} className='upload-list_picture-container'>
                            <div
                                className='upload-list_picture-container_image'
                                style={{
                                    backgroundImage:`url(${url})`
                                }}
                            />
                            <input
                                value={names[index]}
                                onChange={(e) => {
                                    let newNames = [...names];
                                    names[index] = e.target.value;
                                    setNames(newNames);
                                }}
                            />
                            <span>{descriptions[index]}</span>
                        </div>
                    )
                })}
            </form>
        )
    }
    return (
        <>
            <div className='upload-body-file-list'>
                {bodyType}
            </div>
        </>
    )
}

export default UploadBodyFileList;
