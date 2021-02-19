import {combineReducers, createStore} from "redux"

const initialCartState = {
        products: []

}

function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case 'addToCart':
            return {
                products: [...state.products, action.payload]
            }
        case 'deleteFromCart': {
            return {
                products: state.products.filter(p => p.id !== action.payload.id)
            }
        }
        case 'clearCart': {
            return {
                products: []
            }
        }
        default:
            return state;
    }
}
const initialProductState = {
    product: []
}
function productReducer(state = initialProductState, action){
    switch (action.type) {
        default:
            return state
    }
}
const reducer = combineReducers(
    {
        cart: cartReducer,
        product: productReducer
    }
)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
