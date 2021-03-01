import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {cartReducer} from "./store/cart/cart.reducer";
import thunk from "redux-thunk";
import {productReducer} from "./store/product/product.reducer";



const reducer = combineReducers(
    {
        cart: cartReducer,
        product: productReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)))

export default store;
