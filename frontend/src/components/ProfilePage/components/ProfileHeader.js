import {useEffect, useState} from 'react';
const ProfileHeader = ({userData}) => {
    const [backImageUrl, setBackImageUrl] = useState(null);
    useEffect(() => {
        if(userData.Pictures && userData.Pictures.length > 0){
            let randomNum = Math.floor(Math.random() * userData.Pictures.length);
            setBackImageUrl(userData.Pictures[randomNum].image_url);
        }
    }, [userData.Pictures]);

    return (
        <div
            className='profile-header'
            style={backImageUrl ? {backgroundImage:`url(${backImageUrl}`}: {}}>
            <h2 className='profile-header_username'>{userData.username}</h2>
            <h3 className='profile-header_info'>Pictures: {userData.Pictures ? userData.Pictures.length : 0}</h3>
            <h3 className='profile-header_info'>Albums: {userData.Albums ? userData.Albums.length : 0}</h3>
        </div>
    )
}

export default ProfileHeader;
