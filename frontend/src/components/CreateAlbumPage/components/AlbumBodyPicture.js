
const AlbumBodyPicture = ({addedPictures, setAddedPictures, picture, index}) => {
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
    //Check if picture is already in album
    const swapPictureOrder = (swapPic) => {
        let swapIndex = -1;
        let currentIndex = -1;
        for(let i = 0; i < addedPictures.length; i++){
            if(picture.id === addedPictures[i].id){
                console.log("current", i);
                currentIndex = i;
            }
            if(swapPic.id === addedPictures[i].id){
                console.log("swap",i)
                swapIndex = i;
            }
        }
        let newPictures = [...addedPictures];
        [newPictures[swapIndex], newPictures[currentIndex]] = [newPictures[currentIndex], newPictures[swapIndex]];
        setAddedPictures(newPictures);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let pictureData = JSON.parse(e.dataTransfer.getData("text"));
        if(pictureData.index >= 0 && pictureData.picture.id !== picture.id){
            //Swap positions
            swapPictureOrder(pictureData.picture);
        }
    }
    return (
        <div
            key={picture.id}
            draggable
            className='create-album_picture-container'
            onDragStart={(e) => {
                let transfer = {picture, index};
                e.dataTransfer.setData('text', JSON.stringify(transfer));
            }}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
            style={{
                backgroundImage: `url(${picture.image_url})`
            }}
        >
            <div className='picture-container_name-tip'>
                {picture.name}
            </div>
        </div>
    )
}

export default AlbumBodyPicture;
