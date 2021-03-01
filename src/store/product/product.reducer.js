import {
    LOAD_PRODUCTS_FAILURE,
    LOAD_PRODUCTS_PENDING,
    LOAD_PRODUCTS_SUCCESS,
    SET_LOADING,
    SET_PRODUCTS
} from "./product.actions";

const initialProductState = {
    loading: true,
    products: [],
    error: false
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
        case  LOAD_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true

            }
        case  LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false

            }
        case  LOAD_PRODUCTS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state;
    }
}
