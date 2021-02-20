const initialProductState = {
    product: []
}

export function productReducer(state = initialProductState, action) {
    switch (action.type) {
        case 'setProducts':
            return {
                ...state,
                product: action.payload
            }
        case 'setQuery':
            return {
                ...state,
                query: action.payload
            }
        default:
            return state
    }
}
