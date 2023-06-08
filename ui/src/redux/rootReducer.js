import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import itemReducer from "./items/itemReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    items: itemReducer
});

export default rootReducer;