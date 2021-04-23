import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session';

const ProfileButton = ( {user} ) => {
    const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const openMenu = () => {
        if(showMenu){
            return;
        }
        setShowMenu(true);
    }

    const logOut = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logoutUser());
    }

    useEffect(() => {
        if(!showMenu){
            return;
        }
        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu])

    return (
        <>
            <button onClick={openMenu}>
                <i className="address-card"></i>
            </button>
            {showMenu && (
                <div className="nav_profile-menu">
                    <h3>Username: </h3>
                    <p>{sessionUser.username}</p>
                    <h3>Email: </h3>
                    <p>{sessionUser.email}</p>
                    <button onClick={logOut}>Log Out</button>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
