import React, {useState} from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Products = ({name, price, id, }) => {
    const [onLeadProduct, setOnLeadProduct] = useState(false);
    const showButton = () => {
        setOnLeadProduct(true);
    }
    const hideButton = () => {
        setOnLeadProduct(false);
    }
    const dispatch = useDispatch()

    const addProductInCart = ()=>{
        dispatch({
            type: 'addToCart',
            payload:{
                id: id,
                name: name,
                price: price,
                count: 1
            }
        })
        console.log(id)
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
            <button onClick={()=>{
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
