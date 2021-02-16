import React, {useState, useEffect} from "react";
import style from './shopping-cart.module.css';
import {productsData} from "../../data/products.data"
import FunctionalCartLine from "../cart-line/cart-line";


let cartCount = 0;
const ShoppingCart = ({hisActive, closeCart, index}) => {
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
                        console.log(item);
                        item.count++;
                    }
                });
            }
        }
    }
    const [indexCart, setIndexCart] = useState(index);
    const [cart, setCart] = useState([]);
    useEffect(() => {

        if (typeof index === "string" || index instanceof String ){

            let  str = index.slice(1);
            setIndexCart(Number.parseInt(str));
            renderProductInCart(Number.parseInt(str));
        }

        else if (index !== null) {
            setIndexCart(index);
            renderProductInCart(index);
        }

    }, [setIndexCart,index])

    const addProductToCart = (id) => {

        setCart([...cart, productsData[id]]);
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
