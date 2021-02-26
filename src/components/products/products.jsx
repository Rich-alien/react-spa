import React, {useState} from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cart/cart.actions";

const Products = ({name, price, id}) => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()

    const handleAddProductInCart = () => {
        dispatch(addToCart({
                id: id,
                name: name,
                price: price,
                count: 1
            }
        ))
    }

    const handleShowButton = () => {
        setActive(true);
    }
    const handleHideButton = () => {
        setActive(false);
   }
    return (
        <div
            onMouseOver={handleShowButton}
            onMouseLeave={handleHideButton}
            className={style['product-container']}>
            <img className={style[active ?
                'product-image__blur' :
                'product-image']}
                 src={productTemplate}
                 alt="img product"/>
            <div className={style['product-name']}>{name}</div>
            <div className={style['product-price']}>{price}руб.</div>
            <button onClick={() => {
                handleAddProductInCart(id)
            }}
                    className={style[active ?
                        'product-button__show' :
                        'product-button__hidden']}>
                добавить в корзину
            </button>
            <Link to={`/products/${id}`} className={style[active ?
                'product-button-description__show' :
                'product-button__hidden']}>
                описание
            </Link>
        </div>
    )
}
export default Products;
