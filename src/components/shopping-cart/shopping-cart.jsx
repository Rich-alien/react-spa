import React, {useState, useEffect} from "react";
import style from './shopping-cart.module.css';
import {productsData} from "../../data/products.data"
import FunctionalCartLine from "../cart-line/cart-line";
import {useDispatch, useSelector} from "react-redux";


let cartCount = 0;
const ShoppingCart = ({hisActive, closeCart, index}) => {
    // const renderProductInCart = (index) => {
    //     if (cartCount === 0) {
    //         cartCount++;
    //         addProductToCart(index);
    //     } else {
    //         if (hasCollision(index)) {
    //             cartCount++;
    //             addProductToCart(index);
    //         } else {
    //             cart.forEach(item => {
    //                 if (item.id === index) {
    //                     console.log(item);
    //                     item.count++;
    //                 }
    //             });
    //         }
    //     }
    // }
    // // eslint-disable-next-line no-unused-vars
    // const [indexCart, setIndexCart] = useState(index);
    // const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     if (typeof index === "string" || index instanceof String) {
    //         setIndexCart(Number.parseInt(index));
    //         renderProductInCart(Number.parseInt(index));
    //     } else if (index !== null) {
    //         setIndexCart(index);
    //         renderProductInCart(index);
    //     }
    //     // eslint-disable-next-line
    // }, [setIndexCart, index])
    //
    // const addProductToCart = (id) => {
    //
    //     setCart([...cart, productsData[id]]);
    // }
    // const hasCollision = (id) => {
    //     let HasId = true;
    //     cart.forEach(item => {
    //         if (item.id === id) {
    //             HasId = false;
    //         }
    //     });
    //     return HasId;
    // }
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const deleteCart = () =>{
        dispatch({
            type: 'clearCart'
        })
    }
    return (
        <div className={style[hisActive ? 'container' : 'hide']}>

            {products === undefined ?
                <div>В корзине пока что нет товаров </div> :
                products.map((item, index) => (<FunctionalCartLine
                    key={index}
                    id={index}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />))
            }
            <button onClick={() => {
                deleteCart()
            }}>delete all
            </button>
            <button onClick={closeCart}>
                back
            </button>
        </div>
    )
}

export default ShoppingCart;
