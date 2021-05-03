import {useEffect, useState} from 'react';
import {csrfFetch} from '../../store/csrf';
import {useParams} from 'react-router-dom';
import SingleResult from './components/SingleResult';

import './SearchResults.css';

const SearchResults = () => {
    const [pictures, setPictures] = useState([]);
    let {querytype, querystring} = useParams();
    console.log(querytype);
    console.log(querystring);
    useEffect(() => {
        async function fetchQuery(){
            if(querytype === 'name'){
                let response = await csrfFetch(`/api/pictures/query/name/${querystring}`);
                let data = await response.json();
                console.log(data);
                setPictures(JSON.parse(data));
            } else if(querytype === 'tag'){

            }
        }
        fetchQuery();
    }, [querytype, querystring]);

    return (
        <div className='search-results-display'>
            <h1>Search Results: </h1>
            {pictures && pictures.map((picture) => {
                return (
                    <SingleResult key={picture.id} picId={picture.id} url={picture.image_url} name={picture.name} owner={picture.User.username}/>
                )
            })}

        </div>
    );
}

export default SearchResults;
