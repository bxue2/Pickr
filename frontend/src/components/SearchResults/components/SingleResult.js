import {useHistory} from 'react-router-dom';
const SingleResult = ({url, name, owner, picId}) => {
    const history = useHistory();

    const goToPic = () => {
        history.push(`/pictures/${picId}`)
    }

    return (
        <div className='single-result' onClick={goToPic}>
            <div className='image-preview' style={{backgroundImage: `url('${url}')`}}/>
            <div className='picture-info'>
                <div className='picture-name'>Name: {name}</div>
                <div className='picture-owner'>Owner: {owner}</div>
            </div>
        </div>
    )
}

export default SingleResult;
