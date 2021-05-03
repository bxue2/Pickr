import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [showOption, setShowOption] = useState(false);
    const history = useHistory();

    const searchNameHandler = (e) => {
        e.preventDefault();
        //search logic
        if(searchText !== ""){
            setSearchText('');
            setShowOption(false);
            history.push(`/search/name/${searchText}`)
        }

    }

    const searchTagHandler = (e) => {
        e.preventDefault();
        //search logic
        if(searchText !== ""){
            setSearchText('');
            setShowOption(false);
            history.push(`/search/tag/${searchText}`)
        }
    }

    return (
        <form className='search-bar' onSubmit={searchNameHandler}>
            <div className='main-search-bar'>
                <button type='submit'>
                    <i className="fas fa-search"></i>
                </button>
                <input
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => {setShowOption(true)}}
                onBlur={() => {setShowOption(false)}}
                placeholder='Search for image (name by default)'/>
            </div>
            <div className={showOption ? 'option-container' : 'option-container hidden'}>
                <div className='search-option' onClick={searchNameHandler} onMouseDown={event => event.preventDefault()}>Search by name</div>
                <div className='search-option' onClick={searchTagHandler} onMouseDown={event => event.preventDefault()}>Search by tag</div>
            </div>
        </form>
    )
}

export default SearchBar;
