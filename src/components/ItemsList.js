import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../actions';

class ItemsList extends React.Component {
    componentDidMount(){
        this.props.fetchItems();
    }

    renderItems = ()=> {
        return this.props.itemsList.map((item)=> {
            console.log(item);
            return (
                <div>
                {item.name}
                </div>
                
            );
        });
    }


    render(){
        console.log(this.props.itemsList);
        return <div>{ this.renderItems()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { itemsList: state.itemsList };
}

export default connect(mapStateToProps, {fetchItems: fetchItems})(ItemsList);