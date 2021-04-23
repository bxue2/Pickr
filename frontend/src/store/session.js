import {csrfFetch} from './csrf'

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

export const loginUser = (user) => async dispatch => {
    const {credential, password} = user;
    const response = await csrfFetch('api/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            credential,
            password
        })
    })

    // if(response.ok){
        const data = await response.json();
        dispatch(setUser(data.user));
    // }
    return response;
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('api/session');

    // if(response.ok) {
        const data = await response.json();
        dispatch(setUser(data.user));
    // }
    return response;
}

export const signUpUser = (user) => async dispatch => {
    const {username, email, password} = user;
    const response = await csrfFetch('api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
    })
    const data = await response.json();
    dispatch(setUser(data.user))
    return response;
}

export const logoutUser = () => async dispatch => {
    const response = await csrfFetch('api/session', {
        method: 'DELETE'
    })
    dispatch(removeUser());
    return response;
}

const sessionReducer = (state=initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case SET_USER:
            newState.user = action.user;
            return newState;
        case REMOVE_USER:
            newState.user = null;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;
