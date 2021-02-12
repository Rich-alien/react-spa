import React, {useState, useEffect,useMemo} from "react";
import style from './shopping-cart.module.css';
import {productsData} from "../../data/products.data"
import FunctionalCartLine from "../cart-line/cart-line";


let cartCount = 0;
const useCart = () => {
    // const [indexToCart, setIndexToCart] = useState(0);
    const [cart, setCart] = useState([]);
    const renderProductInCart = (index) => {
        if (cartCount === 0) {
            cartCount++;
            addProductToCart(index);
        } else {
            if (hasCollision(index)) {
                cartCount++;
                addProductToCart(index);
            } else {
                cart.forEach(item => {
                    if (item.id === index) {
                        item.count++;
                    }
                });
            }
        }
    }
    const addProductToCart = (id) => {
        setCart(productsData[id]);
    }
    const hasCollision = (id) => {
        let HasId = true;
        cart.forEach(item => {
            if (item.id === id) {
                HasId = false;
            }
        });
        return HasId;
    }
    return {
        cart,
        setCart,
        renderProductInCart

    }
}
const ShoppingCart = ({hisActive, closeCart, index}) => {
    const {
        cart,
        renderProductInCart
    } = useCart(index);
    useEffect(() => {
        renderProductInCart()
    }, [])
    return (
        <div className={style[hisActive ? 'container' : 'hide']}>
            {cart === undefined ?
                <div>В корзине пока что нет товаров </div> :
                cart.map((item, index) => (<FunctionalCartLine
                    key={index}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />))
            }
            <button onClick={closeCart}>
                back
            </button>
        </div>
    )
}

export default ShoppingCart;
