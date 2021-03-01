export function loadProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(productsData),
            1000
        )
    })
}

export const productsData = [
    {
        id: 0,
        name: 'Футболка с принтом Marvel',
        price: 999,
        count: 1,

    },
    {
        id: 1,
        name: 'Базовое поло',
        price: 399,
        count: 1,
    },
    {
        id: 2,
        name: 'Футболка со слоган-принтом',
        price: 199,
        count: 1,
    },
    {
        id: 3,
        name: 'Футболка-лонгслив с принтом',
        price: 499,
        count: 1,
    },
    {
        id: 4,
        name: 'Базовая футболка',
        price: 299,
        count: 1,
    },
    {
        id: 5,
        name: 'Футболка с обманкой',
        price: 999,
        count: 1,
    },
    {
        id: 6,
        name: 'Поло из двухцветного пике',
        price: 1499,
        count: 1,
    },
    {
        id: 7,
        name: 'Футболка с тропическим принтом',
        price: 799,
        count: 1,
    },
    {
        id: 8,
        name: 'Полоз ',
        price: 1399,
        count: 1,
    },
    {
        id: 9,
        name: 'вухцветного ',
        price: 1479,
        count: 1,
    },
    {
        id: 10,
        name: 'Поло ',
        price: 199,
        count: 1,
    },
    {
        id: 11,
        name: 'пике',
        price: 149,
        count: 1,
    },

]
