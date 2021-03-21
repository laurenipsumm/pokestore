import axios from "axios";

export const fetchItems = () => {
    return async (dispatch)=> {
        const res = await axios.get('https://pokeapi.co/api/v2/item/?limit=5');
        dispatch({ 
            type:'FETCH_ITEMS',
            payload: res.data
        });
    }
};

export const fetchItemDetails = () => {
    return async (dispatch) => {
        const res = await axios.get('https://pokeapi.co/api/v2/item/1');
        dispatch({
            type: 'FETCH_ITEM_DETAILS',
            payload: res
        });
    }
}