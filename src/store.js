import {cartReducer} from "./store/cart/cart.slice";
import {productReducer} from "./store/product/product.slice";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default store;
