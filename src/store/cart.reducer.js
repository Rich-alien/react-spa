const initialCartState = {
    products: [],
    activeCart: true // false
}
const renderProductInCart = (cart, data) => {
    if (hasCollision(cart, data.id)) {
        console.log('collizia')
       return getNewCart(cart, data)
    } else {
        return [...cart, data]
    }

}
const getNewCart = (cart, data) => {
    let newCart = [...cart]
    newCart.forEach((item) => {
            if (item.id === data.id) {
              item.count++;
            }
        }
    )
    return [newCart]
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
                products: state.products[action.payload.id]++ // не тот порядок id fix
            }
        case 'decrementProduct':
            return {
                ...state,
                products: state.products[action.payload.id]-- // не тот порядок id fix
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
