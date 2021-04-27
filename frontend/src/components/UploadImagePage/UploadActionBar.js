
const UploadActionBar = ({pictures, setPictures}) => {
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
                {pictures.length > 0 && (
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
