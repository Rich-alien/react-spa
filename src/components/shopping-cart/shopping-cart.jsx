import React from "react";
import style from './shopping-cart.module.css';
import {useDispatch, useSelector} from "react-redux";

const ShoppingCart = () => {
    const products = useSelector(state => state.cart.products)

    const hisActive = useSelector(state => state.cart.activeCart)

    const dispatch = useDispatch()

    const handleCloseCart = () => {
        dispatch({
            type: 'closeCart'
        })
    }
    const handleDeleteCart = () => {
        dispatch({
            type: 'clearCart'
        })
    }
    return (
        <div className={style[hisActive ? 'container' : 'hide']}>
            {
                products.map(item=>item.name)
            }
            {
                products.map(item=>item.count)
            }
            {/* на n время */}
            {/*{products === undefined ?*/}
            {/*    <div>В корзине пока что нет товаров </div> :*/}
            {/*    products.map((item, index) => (<FunctionalCartLine*/}
            {/*        key={index}*/}
            {/*        id={index}*/}
            {/*        name={item.name}*/}
            {/*        price={item.price}*/}
            {/*        count={item.count}*/}
            {/*    />))*/}
            {/*}*/}

            <button className={style.delete__all} onClick={handleDeleteCart}>delete all</button>
            <button className={style.close} onClick={handleCloseCart}>close</button>
        </div>
    )
}

export default ShoppingCart;
