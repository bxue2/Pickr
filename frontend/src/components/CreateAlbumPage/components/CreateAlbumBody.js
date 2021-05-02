import AlbumBodyPicture from './AlbumBodyPicture';
const CreateAlbumBody = ({unusedPictures, addedPictures, setAddedPictures}) => {

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
        // if(e.target.class === "create-album_picture-container"){
        //     console.log("Dragover");
        // }
    }
    //Check if picture is already in album
    const checkPictureExists = (picture) => {
        for(let i = 0; i < addedPictures.length; i++){
            if(picture.id === addedPictures[i].id){
                return true;
            }
        }
        return false;
    }
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let pictureData = JSON.parse(e.dataTransfer.getData("text"));
        if(pictureData.index === -1){
            if(!checkPictureExists(pictureData.picture)){
                let newPictures = [...addedPictures];
                newPictures.push(pictureData.picture);
                setAddedPictures(newPictures);
            }
        }
    }

    return (
        <div
            className='create-album-body'
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
        >
            {
                addedPictures.map((picture, index) => {
                    return <AlbumBodyPicture addedPictures={addedPictures} setAddedPictures={setAddedPictures} picture={picture} index={index} key={index}/>
                })
            }
            {addedPictures.length === 0 && (
                <div className='drag-picture-here'>
                    Drag Photos Here to Add to Album
                </div>
            )}
        </div>
    )
}

export default CreateAlbumBody;
