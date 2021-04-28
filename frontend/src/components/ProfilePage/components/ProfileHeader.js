
const ProfileHeader = ({userData}) => {

    return (
        <div className='profile-header'>
            <div className='profile-header_username'>{userData.username}</div>
        </div>
    )
}

export default ProfileHeader;
