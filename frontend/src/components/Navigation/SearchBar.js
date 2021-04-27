import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const history = useHistory();

    const searchHandler = (e) => {
        e.preventDefault();
        //search logic
        history.push('/search-results')
    }
    return (
        <form className='search-bar' onSubmit={searchHandler}>
            <button type='submit'>
                <i className="fas fa-search"></i>
            </button>
            <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}/>
        </form>
    )
}

export default SearchBar;
