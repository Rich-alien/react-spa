import React, {useState} from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";
import {Link} from "react-router-dom";

const Products = ({name, price, id, addProductInCart}) => {
    const [onLeadProduct, setOnLeadProduct] = useState(false);
    const showButton = () => {
        setOnLeadProduct(true);
    }
    const hideButton = () => {
        setOnLeadProduct(false);
    }
    return (
        <div
            onMouseOver={showButton}
            onMouseLeave={hideButton}
            className={style['product-container']}>
            <img className={style[onLeadProduct ?
                'product-image__blur' :
                'product-image']}
                 src={productTemplate}
                 alt="img product"/>
            <div className={style['product-name']}>{name}</div>
            <div className={style['product-price']}>{price}руб.</div>
            <button onClick={() => {
                addProductInCart(id)
            }}
                    className={style[onLeadProduct ?
                        'product-button__show' :
                        'product-button__hidden']}>
                добавить в корзину
            </button>
            <Link to={`/products/${id}`} className={style[onLeadProduct ?
                        'product-button-description__show' :
                        'product-button__hidden']}>
               описание
            </Link>
        </div>
    )
}
export default Products;
