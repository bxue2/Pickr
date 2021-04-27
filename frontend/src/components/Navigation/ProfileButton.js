import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
                <i className="far fa-address-card" />
                Profile
            </button>
            {showMenu && (
                <div className="nav_profile-menu">
                    <h3>Username: </h3>
                    <Link to={`/users/${sessionUser.id}`}>{sessionUser.username}</Link>
                    <h3>Email: </h3>
                    <Link to={`/users/${sessionUser.id}`}>{sessionUser.email}</Link>
                    <button onClick={logOut}>Log Out</button>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
