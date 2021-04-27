import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { csrfFetch } from '../../store/csrf';
import ProfileHeader from './ProfileHeader';

const ProfilePage = () => {
    let sessionUser = useSelector(state => state.session.user)
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect(async () => {
        let profileUser = await csrfFetch(`/api/users/${params.userid}`)
    }, [user])
    return (
        <>
            <ProfileHeader />
        </>
    );
}

export default ProfilePage;
