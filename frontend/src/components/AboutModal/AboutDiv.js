import {Link} from 'react-router-dom';
import './AboutModal.css';

const AboutDiv = () => {
    return (
        <div className='about-div'>
            <h2>About:</h2>
            <h4>Brian Xue</h4>
            <div className='profile-pic' />
            <span>
            <span>
                <h3>{"LinkedIn: "}</h3>
                <Link to='https://www.linkedin.com/in/brian-xue/'>https://www.linkedin.com/in/brian-xue/</Link>
            </span>
                <h3>{"Github: "}</h3>
                <Link to='https://github.com/bxue2'>https://github.com/bxue2</Link>
            </span>
            <span>
                <h3>{"Github Repo: "}</h3>
                <Link to='https://github.com/bxue2/Pickr'>https://github.com/bxue2/Pickr</Link>
            </span>
        </div>
    )
}

export default AboutDiv;
