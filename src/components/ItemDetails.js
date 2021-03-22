import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchItemDetails } from '../actions';

class ItemDetails extends React.Component {

    componentDidMount () {
        this.props.fetchItemDetails(this.props.location.state.item);
    }

    renderItemDetails() {
        if(this.props.selectedItemDetails.name === this.props.location.state.item){
            return (
                <div>
                    <img src={this.props.selectedItemDetails.sprites.default} alt="master ball pokéball"/>
                    <div>{this.props.selectedItemDetails.name}</div>
                </div>
            );
        }
        return <div>No item details</div>;
    }
    render() {
        return(
            <div>
                <Link to="/"><button>Back</button></Link>
                {this.renderItemDetails()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {selectedItemDetails: state.selectedItemDetails};
}

export default connect(mapStateToProps, { fetchItemDetails })(ItemDetails);