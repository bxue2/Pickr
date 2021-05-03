import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import './HomePage.css';
const HomePage = () => {
    let sessionUser = useSelector(state => state.session.user)
    const [bgImageId, setBgImageId] = useState(0);
    useEffect(() => {
        setTimeout(() => {setBgImageId((bgImageId + 1)%3)}, 7000)
    }, [bgImageId])

    if(sessionUser){
        return <Redirect to={`/users/${sessionUser.id}`}/>;
    }
    else{
        return (
            <div
                className='home-display'
                style={{backgroundImage: ('url(' + require(`../../images/backgrounds/bg_${bgImageId}.jpg`).default + ')')}}
            >
                Welcome to Pickr
            </div>
        );
    }

}

export default HomePage;
