import React from "react";
import style from './shopping-cart.module.css';
import {useDispatch, useSelector} from "react-redux";
import FunctionalCartLine from "../cart-line/cart-line";
import {clearFromCart} from "../../store/cart/cart.slice";
import {selectCartProducts} from "../../store/cart/cart.slice";

const ShoppingCart = ({active,closeCart}) => {
    const products = useSelector(selectCartProducts)

    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        dispatch(clearFromCart())
    }
    return (
        <div className={style[active ? 'container' : 'hide']}>
            {products === undefined ?
                <div>В корзине пока что нет товаров </div> :
                products.map((item, index) => (<FunctionalCartLine
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />))
            }

            <button className={style.delete__all} onClick={handleDeleteCart}>delete all</button>
            <button className={style.close} onClick={closeCart}>close</button>
        </div>
    )
}

export default ShoppingCart;
