

const ProfileNavBar = ({pageDisplay, setPageDisplay}) => {

    return (
        <div className='profile-nav-bar'>
            <ul className='profile-nav-bar_list'>
                <li>
                    <div
                        className={pageDisplay === 'about' ? 'active' : ''}
                        onClick={() => setPageDisplay("about")}>
                        About
                    </div>
                </li>
                <li>
                    <div
                        className={pageDisplay === 'pictures' ? 'active' : ''}
                        onClick={() => setPageDisplay("pictures")}>
                        Pictures
                    </div>
                </li>
                <li>
                    <div
                        className={pageDisplay === 'album' ? 'active' : ''}
                        onClick={() => setPageDisplay("album")}>
                        Album
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default ProfileNavBar;
