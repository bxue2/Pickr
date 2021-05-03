import {useEffect, useState} from 'react';
import SingleResult from './components/SingleResult';

const SearchResults = ({queryType, queryString}) => {
    const {pictures, setPictures} = useState([]);

    useEffect(() => {
        async function fetchQuery(){
            if(queryType='tag'){

            } else if(queryType='name'){

            }
        }
        fetchQuery();
    }, []);

    return (
        <div>
            {pictures.map((picture) => {
                return (
                    <SingleResult key={picture.id}/>
                )
            })}

        </div>
    );
}

export default SearchResults;
