import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import {useSelector} from 'react-redux';
import { csrfFetch } from '../../store/csrf';
import PicturesComponent from './PicturesComponent';
import ProfileHeader from './ProfileHeader';
import ProfileNavBar from './ProfileNavBar';
import './ProfilePage.css';

const ProfilePage = () => {
    // let sessionUser = useSelector(state => state.session.user)
    const [userData, setUserData] = useState({});
    const [pageDisplay, setPageDisplay] = useState("about");
    const params = useParams();
    const [currentComponent, setCurrentComponent] = useState('');

    useEffect(() => {
        async function getUserData(){
            let profileUser = await csrfFetch(`/api/users/${params.userid}`)
            let data = await profileUser.json();
            setUserData(data);
        }
        getUserData();
    }, [params.userid])


    useEffect(() => {
        const showComponent = () => {
            switch(pageDisplay){
                case "pictures":
                    return (<PicturesComponent pictures={[]}/>)
                default:
                    return;
            }
        }
        setCurrentComponent(showComponent());
    }, [pageDisplay])

    return (
        <>
            <ProfileHeader userData={userData}/>
            <ProfileNavBar pageDisplay={pageDisplay} setPageDisplay={setPageDisplay}/>
            {currentComponent}
        </>
    );
}

export default ProfilePage;
