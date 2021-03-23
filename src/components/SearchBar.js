import React, {useState} from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onFormSubmit = (event) =>{
        // hmmm maybe don't prevent default
        // event.preventDefault();

    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type='text' onChange={onInputChange} value={term}/>
            </form>
        </div>
    )
}

export default SearchBar;