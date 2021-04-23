const SET_USER = "session/SET_USER"
const REMOVE_USER = "session/REMOVE_USER"

const initialState = { user: null }
// {
//   user: {
//     id,
//     email,
//     username,
//     createdAt,
//     updatedAt
//   }
// }

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const loginUser = (req, res) => async dispatch => {
    const response = await fetch('api/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {user: req.credential.username, email: req.credential.email, password: req.credential.password}
    })

    if(response.ok){
        const user = await response.json();
        dispatch(setUser(user));
    }
}


const sessionReducer = (state=initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case SET_USER:
            newState[user] = action.user;
            return newState;
        case REMOVE_USER:
            newState[user] = null;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;
