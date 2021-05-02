import {Link} from 'react-router-dom';
import './AboutModal.css';

const AboutDiv = () => {
    return (
        <div className='about-div'>
            <h2>About:</h2>
            <h4>Brian Xue</h4>
            <span>
                <h3>{"Github: "}</h3>
                <Link to='https://github.com/bxue2'>https://github.com/bxue2</Link>
            </span>
        </div>
    )
}

export default AboutDiv;
