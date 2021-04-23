import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ProfileButton from './ProfileButton';

const Navigation = () => {
    let sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <ProfileButton />
        )
    } else {
        sessionLinks = (
            <>
                <li>
                    <NavLink to="login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="signup">Sign Up</NavLink>
                </li>
            </>
        );
    }
    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            {}
        </ul>
    )
}

export default Navigation;
