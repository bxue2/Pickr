import {useEffect, useState} from 'react';
import {csrfFetch} from '../../store/csrf';
import {useParams} from 'react-router-dom';
import SingleResult from './components/SingleResult';

import './SearchResults.css';

const SearchResults = () => {
    const [pictures, setPictures] = useState([]);
    let {querytype, querystring} = useParams();
    useEffect(() => {
        async function fetchQuery(){
            if(querytype === 'name'){
                let response = await csrfFetch(`/api/pictures/query/name/${querystring}`);
                let data = await response.json();
                setPictures(JSON.parse(data));
            } else if(querytype === 'tag'){
                let response = await csrfFetch(`/api/tags/query/${querystring}`);
                let data = await response.json();
                setPictures(JSON.parse(data));
            }
        }
        fetchQuery();
    }, [querytype, querystring]);

    let content = (
        <h1>No Pictures Found</h1>
    );
    if(pictures && pictures.length > 0){
        content = pictures.map((picture) => {
            return (
                <SingleResult key={picture.id} picId={picture.id} url={picture.image_url} name={picture.name} owner={picture.User.username}/>
            )
        })
    }

    return (
        <div className='search-results-display'>
            <h1>Search Results: </h1>
            {/* {pictures && pictures.map((picture) => {
                return (
                    <SingleResult key={picture.id} picId={picture.id} url={picture.image_url} name={picture.name} owner={picture.User.username}/>
                )
            })} */}
            {content}

        </div>
    );
}

export default SearchResults;
