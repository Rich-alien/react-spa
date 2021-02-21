import {combineReducers, createStore} from "redux"
import {cartReducer} from "./store/cart/cart.reducer";
import {productReducer} from "./store/product.reducer";



const reducer = combineReducers(
    {
        cart: cartReducer,
        product: productReducer
    }
)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
