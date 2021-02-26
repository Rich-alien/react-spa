export const selectCartProducts = state => state.cart.products;
export const selectProducts = state => state.product;
export const selectCartCount = state => selectCartProducts(state).length;


