export const LOAD_ALBUM = "pictures/LOAD_ALBUM";
export const REMOVE_PICTURE = "pictures/REMOVE_PICTURE";
export const ADD_PICTURE = "items/ADD_PICTURE";
export const CLEAR_PICTURES = "items/CLEAR_PICTURES"

//Will store current list of photos

const initialState = { pictures: []}

const loadAlbum = (albumid) => {
    return {
        type: LOAD_PICTURES,
        albumid
    }
}

const removePicture = (pictureid) => {
    return {
        type: REMOVE_PICTURE,
        pictureid
    }
}

const addPicture = (pictureid) => {
    return {
        type: ADD_PICTURE,
        pictureid
    }
}

const clearPictures = () => {
    return{
        type: CLEAR_PICTURES
    }
}


const picturesReducer = (state=initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_ALBUM:
            newState.user = action.user;
            return newState;
        case CLEAR_PICTURES:
            newState = [];
            return newState;
        case REMOVE_PICTURE:
            newState = [];
            return newState;
        case ADD_PICTURE:
            newState.push("temp");
            return newState;
        default:
            return state;
    }
}

export default picturesReducer;
