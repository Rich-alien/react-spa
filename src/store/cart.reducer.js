const initialCartState = {
    products: [],
    activeCart: false
}
const renderProductInCart = (cart, data) => {
    if (hasCollision(cart, data.id)) {
        return getNewCart(cart, data)
    } else {
        return [...cart, data]
    }

}
const getNewCart = (cart, data) => {
    cart.forEach((item) => {
            if (item.id === data.id) {
                item.count++;
            }
        }
    )
    return [...cart]
}
const hasCollision = (cart, id) => {
    let HasId = false;
    cart.forEach(item => {
        if (item.id === id) {
            HasId = true;
        }
    });
    return HasId;
}
const increment = (state, id) => {
    state.products.forEach(item => {
        if(item.id === id){
            item.count++;
        }
    })
    return [...state.products]
}
const decrement = (state, id) => {
    debugger;
    state.products.forEach(item => {
        if(item.id === id){
            item.count--;
        }
    })
    return [...state.products]
}

export function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case 'addToCart':
            return {
                ...state,
                products: renderProductInCart(state.products, action.payload)
            }
        case 'deleteFromCart': {
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload.id)
            }
        }
        case 'clearCart': {
            return {
                ...state,
                products: []
            }
        }
        case 'incrementProduct':
            return {
                ...state,
                products: increment(state, action.payload.id)
            }
        case 'decrementProduct':
            increment(state, action.payload.id)
            return {
                ...state,
                products: decrement(state, action.payload.id)
            }
        case 'openCart':
            return {
                ...state,
                activeCart: true
            }
        case 'closeCart':
            return {
                ...state,
                activeCart: false
            }
        default:
            return state;
    }
}
