import {useEffect, useState} from 'react';
import {csrfFetch} from '../../store/csrf';
import {useParams} from 'react-router-dom';
import SingleResult from './components/SingleResult';

const SearchResults = () => {
    const [pictures, setPictures] = useState([]);
    const {queryType, queryString} = useParams();

    useEffect(() => {
        async function fetchQuery(){
            // if(queryType='tag'){
                let response = await csrfFetch(`/api/pictures/query/name/seal`);
                let data = await response.json();
                console.log(data);
                setPictures(JSON.parse(data));
            // } else if(queryType='name'){

            // }
        }
        fetchQuery();
    }, []);

    return (
        <div>
            {pictures && pictures.map((picture) => {
                return (
                    <SingleResult key={picture.id} url={picture.image_url} name={picture.name} owner={picture.User.username}/>
                )
            })}

        </div>
    );
}

export default SearchResults;
