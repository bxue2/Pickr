import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import {useSelector} from 'react-redux';
import { csrfFetch } from '../../store/csrf';
import PicturesComponent from './components/PicturesComponent';
import AboutComponent from './components/AboutComponent';
import AlbumComponent from './components/AlbumComponent';
import ProfileHeader from './components/ProfileHeader';
import ProfileNavBar from './components/ProfileNavBar';
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
                    return (<PicturesComponent pictures={userData.Pictures}/>)
                case "albums":
                    return (<AlbumComponent albums={userData.Albums}/>)
                default:
                    return (<PicturesComponent pictures={userData.Pictures}/>)
                    // return (<AboutComponent />)
            }
        }
        setCurrentComponent(showComponent());
    }, [pageDisplay, userData])

    return (
        <>
            <ProfileHeader userData={userData}/>
            <ProfileNavBar pageDisplay={pageDisplay} setPageDisplay={setPageDisplay}/>
            {currentComponent}
        </>
    );
}

export default ProfilePage;
