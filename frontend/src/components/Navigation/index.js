import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from '../SignUpFormModal';
import SearchBar from './SearchBar';
import './Navigation.css'
import AboutModal from '../AboutModal';

const Navigation = ({isLoaded}) => {
    let sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <>
                <li>
                    <Link className='upload-image-button' to='/upload-image'>
                        <i className="fas fa-image" />
                        Upload Image
                    </Link>
                </li>
                <li>
                    <ProfileButton user={sessionUser}/>
                </li>
            </>
        )
    } else {
        sessionLinks = (
            <>
                <li>
                    {/* <NavLink to="login">Log In</NavLink> */}
                    <LoginFormModal />
                </li>
                <li>
                    <SignUpFormModal />
                    {/* <NavLink className='signup-button' to="signup">Sign Up</NavLink> */}
                </li>
            </>
        );
    }
    return (
        <div className='header-bar'>
            <ul className='header-bar-left'>
                <li>
                    <NavLink className='logoLink' exact to="/">Home</NavLink>
                </li>
                <li>
                    <AboutModal />
                </li>
            </ul>
            <ul className='header-bar-right'>
                <li>
                    <SearchBar />
                </li>
                {isLoaded && sessionLinks}
            </ul>
        </div>

    )
}

export default Navigation;
