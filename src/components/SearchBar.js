import React, {useState} from 'react';
import { connect } from 'react-redux';

import { fetchQueryItems } from '../actions';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        props.history.push({
            search: "?" + term
        });
        props.fetchQueryItems(term);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type='text' onChange={onInputChange} value={term}/>
            </form>
        </div>
    )
}



export default connect(null, { fetchQueryItems })(SearchBar);