import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import {useSelector} from 'react-redux';
import { csrfFetch } from '../../store/csrf';
import ProfileHeader from './ProfileHeader';
import ProfileNavBar from './ProfileNavBar';
import './ProfilePage.css';

const ProfilePage = () => {
    // let sessionUser = useSelector(state => state.session.user)
    const [user, setUser] = useState({});
    const [pageDisplay, setPageDisplay] = useState("about");
    const params = useParams();
    useEffect(() => {
        async function getUserData(){
            let profileUser = await csrfFetch(`/api/users/${params.userid}`)
            let data = await profileUser.json();
            setUser(data);
        }
        getUserData();
    }, [params.userid])

    // const showComponent = () => {
    //     switch(pageDisplay){
    //         case "about":
    //             return (<AboutComponent />)
    //     }
    // }

    return (
        <>
            <ProfileHeader user={user}/>
            <ProfileNavBar pageDisplay={pageDisplay} setPageDisplay={setPageDisplay}/>

        </>
    );
}

export default ProfilePage;
