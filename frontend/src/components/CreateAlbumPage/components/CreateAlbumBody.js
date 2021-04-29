
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
        if(e.target.class === "create-album_picture-container"){
            console.log("Dragover");
        }
    }
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.dataTransfer.getData("unused")){
            let picture = e.dataTransfer.getData("picture");
            if(!addedPictures.includes(picture.id)){
                let newPictures = [...addPictures];
                newPictures.push(picture);
                setAddedPictures(newPictures);
            }
        }
        // if(e.target.class === "create-album_picture-container"){
            console.log("Dropped", e.dataTransfer.getData("unused"));
        // }
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
                    return <AlbumBodyPicture picture={picture} index={index}/>
                })
            }
        </div>
    )
}

export default CreateAlbumBody;
