import {SET_LOADING, SET_PRODUCTS} from "./product.actions";

const initialProductState = {
    loading: true,
    products: []
}

export function productReducer(state = initialProductState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}
