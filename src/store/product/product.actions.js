import {loadProducts as loadProductsFromServer} from "../../data/products.data";

export const SET_PRODUCTS = 'setProducts';
export const SET_LOADING = 'setLoading';
export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
export function setLoading(value){
    return{
        type:SET_LOADING,
        payload: value
    }
}
export function loadProducts() {
    return async (dispatch) => {
        dispatch(setLoading(true))
        const products = await loadProductsFromServer()
        dispatch(setProducts(products))
        dispatch(setLoading(false))
    }
}
