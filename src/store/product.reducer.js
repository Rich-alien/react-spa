const initialProductState = {
    product: [],
    onLeadProduct: false
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
        case 'showButton':
            return {
                ...state,
                onLeadProduct: true
            }
        case 'hideButton':
            return {
                ...state,
                onLeadProduct: false
            }
        default:
            return state
    }
}
