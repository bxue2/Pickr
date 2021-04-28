
const UploadBodyFileList = (props) => {
    const {
        imageFiles, names, descriptions, selectIndex
    } = props;
    return (
        <>
            <div className='upload-body-file-list'>
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
                                <span>{names[index]}</span>
                                <span>{descriptions[index]}</span>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default UploadBodyFileList;
