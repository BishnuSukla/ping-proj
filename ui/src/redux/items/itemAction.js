import { addToCart } from "../cart/cartAction";
import { FETCH_ITEMS_REQ, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, INCREMENT_ITEM, DECREMENT_ITEM ,DELETE_ITEM} from "./itemTypes"
import axios from 'axios';

export const fetchItemsRequest = () => {
    return {
        type: FETCH_ITEMS_REQ
    }
}


export const fetchItemsSuccess = (items) => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
}

export const fetchItemsFailed = (error)=>{
    return{
        type: FETCH_ITEMS_FAILURE,
        payload:error
    }
}


export const fetchItems = () => {
    return (dispatch)=> {
        dispatch(fetchItemsRequest);
        axios.get('http://localhost:8085/food')
        .then((res)=>{
            const items = res.data.map((item)=>{
                return {
                    ...item,
                    unitPrice:Number(item.id.toString().slice(-3))/100,
                }
            });
            dispatch(fetchItemsSuccess(items));
            dispatch(addToCart(items));
        }).catch(error=>{
            dispatch(fetchItemsFailed(error.message));
        })
    }
}
