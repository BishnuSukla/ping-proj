import { INCREMENT_ITEM, DECREMENT_ITEM ,DELETE_ITEM, ADD_TO_CART, ADD_PAYMENT_DETAILS, ADD_SINGLE_ITEM_TO_CART} from "./cartTypes"

export const incrementItem = (item) => {
    return {
        type:INCREMENT_ITEM,
        payload:item
    }
}
export const decrementItem = (item) => {
    return {
        type:DECREMENT_ITEM,
        payload:item
    }
}

export const deleteItem = (item) => {
    return {
        type:DELETE_ITEM,
        payload:item
    }
}

export const addToCart = (items) => {
    return {
        type:ADD_TO_CART,
        payload:items
    }
}

export const addSingleItemToCart = (item) => {
    return {
        type:ADD_SINGLE_ITEM_TO_CART,
        payload:item
    }
}

export const addPaymentDetails = (paymentDetails) => {
    return {
        type:ADD_PAYMENT_DETAILS,
        payload:paymentDetails
    }
}

