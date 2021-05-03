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
            <div className='profile-button' onClick={openMenu}>
                <i className="far fa-address-card" />
                Profile
            </div>
            {showMenu && (
                <div className="nav_profile-menu">
                    <span>
                        <h3>Username: </h3>
                        <Link to={`/users/${sessionUser.id}`}>{sessionUser.username}</Link>
                    </span>
                    <span>
                        <h3>Email: </h3>
                        <Link to={`/users/${sessionUser.id}`}>{sessionUser.email}</Link>
                    </span>
                    <div className='logout-button' onClick={logOut}>Log Out</div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
