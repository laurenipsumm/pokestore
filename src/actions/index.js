import axios from "axios";

export const fetchItems = () => {
    return async (dispatch)=> {
        const res = await axios.get('https://pokeapi.co/api/v2/item/?limit=5');
        console.log(res);
        dispatch({ 
            type:'FETCH_ITEMS',
            payload: res.data
        });
    }
};

export const fetchItemDetails = (urlPath) => {
    return async (dispatch) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/item/${urlPath}`);
        dispatch({
            type: 'FETCH_ITEM_DETAILS',
            payload: res
        });
    }
};

export const fetchQueryItems = (query) => {
    return async (dispatch)=> {
        const response = await axios.get('https://pokeapi.co/api/v2/item/?limit=5');
        const result = response.data.results.filter(res => res.name === query);
        dispatch({
            type: 'FETCH_QUERY_ITEMS',
            payload: result
        });
    }
};