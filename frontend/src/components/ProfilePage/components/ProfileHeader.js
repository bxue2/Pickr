import {useState} from 'react';
const ProfileHeader = ({userData}) => {
    console.log(userData);
    let backImageUrl = null;
    if(userData.Pictures && userData.Pictures.length > 0){
        let randomNum = Math.floor(Math.random() * userData.Pictures.length);
        console.log(randomNum);
        backImageUrl = userData.Pictures[randomNum].image_url;
    }
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
