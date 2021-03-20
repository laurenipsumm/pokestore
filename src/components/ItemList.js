import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchItems } from '../actions';

class List extends React.Component {
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/item/?limit=5')
        .then(function (response) {
            console.log(response);
        });
        
        
        console.log(this.props.fetchItems());
    }
    render(){
        return <div>Store items</div>;
    }
}

export default connect(null, {fetchItems: fetchItems})(List);