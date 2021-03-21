import { combineReducers } from 'redux';

const itemsListReducer = (itemsList = [], action)=> {
    if(action.type === 'FETCH_ITEMS'){
        return itemsList = [...action.payload.results];
    }
    return itemsList;
}

// Item details reducer
const selectedItemDetailsReducer = (selectedItemDetails = {}, action) => {
    if(action.type === 'FETCH_ITEM_DETAILS'){
        return selectedItemDetails = {...action.payload.data};
    }
    return selectedItemDetails;
}

export default combineReducers({
    itemsList: itemsListReducer,
    selectedItemDetails: selectedItemDetailsReducer
});