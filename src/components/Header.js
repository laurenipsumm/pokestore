import React from 'react';

import SearchBar from './SearchBar';

const Header = (props) =>{
    return (
        <div>
            <h1>PokéMart</h1>
            <SearchBar history={props.history}/>
        </div>
    )
}

export default Header;