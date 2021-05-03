import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from '../SignUpFormModal';
import SearchBar from './SearchBar';
import './Navigation.css'
import AboutModal from '../AboutModal';
import * as sessionActions from '../../store/session';

const Navigation = ({isLoaded}) => {
    let sessionUser = useSelector(state => state.session.user);
    let history = useHistory();
    const dispatch = useDispatch();
    let sessionLinks;

    const logoClick = () => {
        history.push('/');
    }

    const demoLogin = async () => {
        return dispatch(sessionActions.loginUser({credential: "Demo-lition", password: "password"}));
    }

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
                <li>
                    <div className='demo-user-button' onClick={demoLogin}>
                        Demo User
                    </div>
                </li>
            </>
        );
    }

    return (
        <div className='header-bar'>
            <ul className='header-bar-left'>
                <li>
                    <div className='logo-link' onClick={logoClick}>
                    </div>
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
