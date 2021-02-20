const initialCartState = {
    products: [],
    activeCart: true // false
}
const renderProductInCart = (cart,data) => {
    if (hasCollision(cart,data.id)) {
        console.log('collizia')
        return data;
    } else {
        return data
    }

}
const hasCollision = (cart,id) => {

    let HasId = false;
    cart.forEach(item => {
        console.log(item.id);
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
                products: [...state.products, renderProductInCart(state.products,action.payload)]
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
                products: state.products[action.payload.id]++
            }
        case 'decrementProduct':
            return {
                ...state,
                products: state.products[action.payload.id]--
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
