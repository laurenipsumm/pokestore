import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchItems } from '../actions';

class ItemsList extends React.Component {
    componentDidMount(){
        this.props.fetchItems();
    }

    renderItems = ()=> {
        return this.props.itemsList.map((item)=> {
            console.log(item);
            return (
                <li key={item.name}>
                <Link to={{
                    pathname: `?${item.name}`,
                    state: {
                        item: `${item.name}`
                    }
                }}>
                 {item.name} 
                 </Link>
                </li> 
            );
        });
    }

    render(){
        console.log(this.renderItems());
        return <ul>
        { this.renderItems()}
        </ul>;
    }
}

const mapStateToProps = (state) => {
    return { itemsList: state.itemsList };
}

export default connect(mapStateToProps, {fetchItems: fetchItems})(ItemsList);