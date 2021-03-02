import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
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
        if (item.id === id) {
            item.count++;
        }
    })
    return [...state.products]
}
const decrement = (state, id) => {
    state.products.forEach(item => {
        if (item.id === id) {
            item.count = item.count - 1;
        }
    })
    return [...state.products]
}
const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {

            state.products = renderProductInCart(state.products, action.payload)
        },
        deleteFromCart(state, action) {
            state.products = state.products.filter(p => p.id !== action.payload.id)
        },
        clearFromCart(state) {
            state.products = [];
        },
        incrementProduct(state, action) {
            increment(state, action.payload.id)
        },
        decrementProduct(state, action) {
            decrement(state, action.payload.id)
        }
    }
})
export const {
    addToCart,
    deleteFromCart,
    clearFromCart,
    incrementProduct,
    decrementProduct
} = slice.actions;
export const cartReducer = slice.reducer;
export const selectCartProducts = state => state.cart.products;
export const selectProducts = state => state.product;
export const selectCartCount = state => selectCartProducts(state).length;
