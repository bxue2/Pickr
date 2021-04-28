
const CreateAlbumSidebar = ({albumName, setAlbumName, albumDesc, setAlbumDesc, addedPictures}) => {

    const saveAlbum = (e) => {
        e.preventDefault();

    }

    return (
        <div className='create-album-sidebar'>
            <form className='create-album-sidebar_form' onSubmit={saveAlbum}>
                <input
                    type='text'
                    className='create-album-sidebar_name'
                    placeholder='Name'
                    value={albumName}
                    onChange={(e) => {
                        setAlbumName(e.target.value)
                    }}
                />
                <textarea
                    className='create-album-sidebar_description'
                    placeholder='Description'
                    value={albumDesc}
                    onChange={(e) => {
                        setAlbumDesc(e.target.value)
                    }}
                />
                <button className='create-album-sidebar_submit-btn' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default CreateAlbumSidebar;
