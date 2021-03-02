import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    products: [],
    error: false
}

const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.loading = action.payload
        },
        setLoading(state, action) {
            state.products = action.payload
        },
        LOAD_PRODUCTS_PENDING(state) {
            state.loading = true
        },
        LOAD_PRODUCTS_SUCCESS(state, action) {
            state.products = action.payload;
            state.loading = true;
        },
        LOAD_PRODUCTS_FAILURE(state) {
            state.error = true;
            state.loading = false;
        }

    }
})

export const {
    setProducts,
    setLoading,
    LOAD_PRODUCTS_PENDING,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILURE
} = slice.actions;
export const productReducer = slice.reducer;
export const selectProducts = state => state.product.products;
export const selectLoading = state => state.product.loading;
