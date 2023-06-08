import { INCREMENT_ITEM, DECREMENT_ITEM, DELETE_ITEM, ADD_TO_CART, ADD_PAYMENT_DETAILS, ADD_SINGLE_ITEM_TO_CART } from "./cartTypes"

const initialState = {
    items: [],
    paymentDetails:{}
}


const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:{
            return{
                items:action.payload.slice(0,7).map((item)=>{
                    return {
                        ...item,
                        quantity:1,
                        price: item.unitPrice
                    }
                }),
            }
        }
        case ADD_SINGLE_ITEM_TO_CART:{
            return{
                ...state,
                items:[...state.items,{...action.payload,quantity:1,price:action.payload.unitPrice}]
            }
        }
        case INCREMENT_ITEM:{
            return {
                ...state,
                items: state.items.map((item)=>{
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            quantity:item.quantity+1,
                            price: (item.quantity+1)*item.unitPrice
                        }
                    }else{
                        return item
                    }
                })
            }
        }   
        case DECREMENT_ITEM:{
            return {
                ...state,
                items: state.items.map((item)=>{
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            quantity:item.quantity-1,
                            price: (item.quantity-1)*item.unitPrice
                        }
                    }else{
                        return item
                    }
                })
            }
        }   
        case DELETE_ITEM:{
            return {
                ...state,
                items: state.items.filter(item=>item.id != action.payload.id)
            }
        } 

        case ADD_PAYMENT_DETAILS:{
            return {
                ...state,
                paymentDetails: {
                    name:action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1).toLowerCase(),
                    cardNumber: action.payload?.number
                }
            }
        } 

        default: return state
    }
}

export default cartReducer;

