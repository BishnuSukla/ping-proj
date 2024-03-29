import { FETCH_ITEMS_REQ, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, INCREMENT_ITEM, DECREMENT_ITEM, DELETE_ITEM } from "./itemTypes"

const initialState = {
    loading: false,
    items: [],
    error:''
}


const itemReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_ITEMS_REQ:
            return{
                ...state,
                loading:true
            }
        case FETCH_ITEMS_SUCCESS:
            return{
                loading:false,
                items:action.payload,
                error:''
            }
        case FETCH_ITEMS_FAILURE:
            return{
                loading:false,
                items:[],
                error:action.payload
            }

        default: return state
    }
}

export default itemReducer;

