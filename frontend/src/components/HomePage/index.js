import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
const HomePage = () => {
    let sessionUser = useSelector(state => state.session.user)
    if(sessionUser){
        return <Redirect to={`/users/${sessionUser.id}`}/>;
    }
    else{
        return (
            <div className='home-display'>
                Welcome to Pickr
            </div>
        );
    }

}

export default HomePage;
