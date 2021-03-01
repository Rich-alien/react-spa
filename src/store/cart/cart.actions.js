export const ADD_TO_CART = 'addToCart';
export const DELETE_FROM_CART = 'deleteFromCart';
export const CLEAR_CART = 'clearCart';
export const INCREMENT_PRODUCT = 'incrementProduct';
export const DECREMENT_PRODUCT = 'decrementProduct';


export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function deleteFromCart(id) {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

export function incrementProduct(id) {
    return {
        type: INCREMENT_PRODUCT,
        payload: id
    }
}

export function decrementProduct(id) {
    return {
        type: DECREMENT_PRODUCT,
        payload: id
    }
}

