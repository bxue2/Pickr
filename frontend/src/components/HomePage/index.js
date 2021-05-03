import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import './HomePage.css';
const HomePage = () => {
    let sessionUser = useSelector(state => state.session.user)
    const [bgImageId, setBgImageId] = useState(0);
    useEffect(() => {
        setTimeout(() => {setBgImageId((bgImageId + 1)%4)}, 6000)
    }, [bgImageId])

    const openSignUpModal = () => {
        let signUpButton = document.querySelector(".signup-button");
        signUpButton.click();
    }

    if(sessionUser){
        return <Redirect to={`/users/${sessionUser.id}`}/>;
    }
    else{
        return (
            <div
                className='home-display'
                style={{backgroundImage: ('url(' + require(`../../images/backgrounds/bg_${bgImageId}.jpg`).default + ')')}}
            >
                <div className='home-text'>
                    <h2>Welcome to Pickr</h2>
                    <div className='sign-up-home-button' onClick={openSignUpModal}>Sign Up Here</div>
                </div>
            </div>
        );
    }

}

export default HomePage;
