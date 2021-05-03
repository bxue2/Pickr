const SingleResult = ({url, name, owner}) => {
    return (
        <div className='single-result'>
            <div className='image-preview' style={{backgroundImage: `url('${url}')`}}/>
            <div className='picture-name'>{name}</div>
            <div className='picture-owner'>{owner}</div>
        </div>
    )
}

export default SingleResult;
