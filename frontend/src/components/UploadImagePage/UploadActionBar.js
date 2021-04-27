
const UploadActionBar = (props) => {

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
                    <input type='file'></input>
                </li>
                {props.imageFiles.length > 0 && (
                    <>
                        <li>
                            Remove
                        </li>
                    </>
                )}

            </ul>
        </div>
    )
}

export default UploadActionBar;
