import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchItems } from '../actions';
import Header from './Header';

class ItemsList extends React.Component {
    componentDidMount(){
        this.props.fetchItems();
    }

    renderItems = ()=> {
        return this.props.itemsList.map((item)=> {
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
        console.log(this.props.history);
        return (
        <div>
            <Header history={this.props.history}/>
            <ul>
                { this.renderItems()}
            </ul>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { itemsList: state.itemsList };
}

export default connect(mapStateToProps, {fetchItems: fetchItems})(ItemsList);