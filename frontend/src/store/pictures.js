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

const addPicture = (picture) => {
    return {
        type: ADD_PICTURE,
        picture
    }
}

const clearPictures = () => {
    return{
        type: CLEAR_PICTURES
    }
}

export const loadPicturesFromAlbum = (albumid) => async dispatch => {
    dispatch(loadAlbum(albumid))
}

export const addPictureToAlbum = (picture) => dispatch => {
    dispatch(addPicture(picture));
}

export const clearAlbum = () => dispatch => {
    dispatch(clearPictures());
}

const picturesReducer = (state=initialState, action) => {
    let newState = {};
    switch(action.type){
        case LOAD_ALBUM:
            newState.user = action.user;
            return newState;
        case CLEAR_PICTURES:
            newState = {pictures: []};
            return newState;
        case REMOVE_PICTURE:
            let newAlbum = []
            for(let i = 0; i < state.pictures.length; i++){
                if(state.pictures[i].id !== action.pictureid){
                    newAlbum.push(state.pictures[i]);
                }
            }
            newState = {pictures: newAlbum};
            return newState;
        case ADD_PICTURE:
            let newAlbum = [...state.pictures];
            newAlbum.push(action.picture);
            newState = {pictures: newAlbum};
            return newState;
        default:
            return state;
    }
}

export default picturesReducer;
