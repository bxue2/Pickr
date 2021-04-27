
const ProfileHeader = ({user}) => {

    return (
        <div className='profile-header'>
            <div className='profile-header_username'>{user.username}</div>
        </div>
    )
}

export default ProfileHeader;
