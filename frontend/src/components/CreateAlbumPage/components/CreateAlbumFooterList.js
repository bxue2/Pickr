const CreateAlbumFooterList = ({unusedPictures, addedPictures, setAddedPictures}) => {

    //Drag and Drop functions
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let pictureData = JSON.parse(e.dataTransfer.getData("text"));

        //If picture data used to be in body, remove from album
        let newPictures = [...addedPictures];
        if(!pictureData.unused){
            for(let i = 0; i < addedPictures.length; i++){
                if(addedPictures[i].id === pictureData.picture.id){
                    newPictures.splice(i, 1);
                    setAddedPictures(newPictures);
                    return;
                }
            }
        }
    }

    return (
        <div className='create-album-footer'>
            <div className='create-album-footer_actions'>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input type='text' placeholder='Search (maybe?)'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div
                className='create-album-footer_list'
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
            >
                {unusedPictures.map((picture) => {
                    return (
                            <div
                                key={picture.id}
                                draggable
                                className='create-album_picture-container'
                                onDragStart={(e) => {
                                    let transfer = {picture, index: -1};
                                    e.dataTransfer.setData('text', JSON.stringify(transfer));
                                }}
                                style={{
                                    backgroundImage: `url(${picture.image_url})`
                                }}
                            >
                                <div className='picture-container_name-tip'>
                                    {picture.name}
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CreateAlbumFooterList;
