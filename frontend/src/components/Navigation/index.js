import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from "../LoginFormModal";
import './Navigation.css'

const Navigation = ({isLoaded}) => {
    let sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <ProfileButton user={sessionUser}/>
        )
    } else {
        sessionLinks = (
            <>
                <li>
                    {/* <NavLink to="login">Log In</NavLink> */}
                    <LoginFormModal />
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
            {isLoaded && sessionLinks}
        </ul>
    )
}

export default Navigation;