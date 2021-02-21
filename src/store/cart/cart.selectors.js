export const selectCartProducts = state => state.cart.products;
export const selectProducts = state => state.product;
export const selectCartCount = state => selectCartProducts(state).length;
export const selectLeadProduct = state => selectProducts(state).onLeadProduct;
export const selectActiveCart = state => state.cart.activeCart

