import { combineReducers } from 'redux';

const itemsListReducer = (itemsList = [], action)=> {
    if(action.type === 'FETCH_ITEMS'){
        return itemsList = [...action.payload.results];
    }
    return itemsList;
}

export default combineReducers({
    itemsList: itemsListReducer
});