import React from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/cart/cart.actions";

const Products = ({name, price, id}) => {

    const dispatch = useDispatch()

    const handleAddProductInCart = ()=>{

        dispatch(addToCart({
                id: id,
                name: name,
                price: price,
                count: 1
            }
        ))
    }
    const onLeadProduct = useSelector(state => state.product.onLeadProduct)

    const handleShowButton = ()=>{
        dispatch({
            type: 'showButton'
        })
    }
    const handleHideButton = ()=>{
        dispatch({
            type: 'hideButton'
        })
    }
    return (
        <div
            onMouseOver={handleShowButton}
            onMouseLeave={handleHideButton}
            className={style['product-container']}>
            <img className={style[onLeadProduct ?
                'product-image__blur' :
                'product-image']}
                 src={productTemplate}
                 alt="img product"/>
            <div className={style['product-name']}>{name}</div>
            <div className={style['product-price']}>{price}руб.</div>
            <button onClick={()=>{
                handleAddProductInCart(id)
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
