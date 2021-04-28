

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
                        className={pageDisplay === 'albums' ? 'active' : ''}
                        onClick={() => setPageDisplay("albums")}>
                        Albums
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default ProfileNavBar;
