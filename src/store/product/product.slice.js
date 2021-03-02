import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadProducts as loadProductsFromServer} from "../../data/products.data";

const initialState = {
    loading: true,
    products: [],
    error: false
}
export const loadProducts = createAsyncThunk(
    'loadProducts',
    () => loadProductsFromServer(),
)
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

    },
    extraReducers: (builder => {
        builder.addCase(loadProducts.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(loadProducts.fulfilled, (state,action)=>{
            state.products = action.payload;
            state.loading = false;
        })
        builder.addCase(loadProducts.rejected, (state)=>{
            state.loading = true;
            state.error = true;
        })
    })
})

export const {
    setProducts,
    setLoading,
} = slice.actions;
export const productReducer = slice.reducer;
export const selectProducts = state => state.product.products;
export const selectLoading = state => state.product.loading;
