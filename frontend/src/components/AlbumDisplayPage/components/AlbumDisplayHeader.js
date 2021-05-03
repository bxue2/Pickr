import {useEffect, useState} from 'react';

const AlbumDisplayHeader = ({albumName, description, username, pictures}) => {
    const [backImageUrl, setBackImageUrl] = useState(null);
    useEffect(() => {
        if(pictures && pictures.length > 0){
            let randomNum = Math.floor(Math.random() * pictures.length);
            setBackImageUrl(pictures[randomNum].image_url);
        }
    }, [pictures]);
    return (
        <div className='album-display-header' style={backImageUrl ? {backgroundImage:`url(${backImageUrl}`}: {}}>
            <div className='album-header_info'>
                <h3>Album: {albumName}</h3>
                <h3>Owner: {username}</h3>
                <p>Description: {description}</p>
            </div>
        </div>
    )
}

export default AlbumDisplayHeader;
