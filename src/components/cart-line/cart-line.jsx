import React from "react";
import style from './cart-line.module.css';
import {useDispatch} from "react-redux";
import {
    decrementProduct,
    deleteFromCart,
    incrementProduct
} from "../../store/cart/cart.actions";

const FunctionalCartLine = ({name, id, count, price}) => {

    const dispatch = useDispatch()

    const handleIncrement = (index) => {
        dispatch(incrementProduct({id: index}))
    }
    const handleDeleteFromCart = (index) => {
        dispatch(deleteFromCart({id: index}))
    }
    const handleDecrement = (index) => {
        dispatch(decrementProduct({id: index}))
    }
    return (
        <div className={style.container}>
            {name}
            {price * count}
            <div>
                <div onClick={() => {
                    handleIncrement(id)
                }}> +
                </div>
                <div className={style.counter}>
                    {count}
                </div>
                <div onClick={() => {
                    handleDecrement(id)
                }}>-
                </div>
                <div onClick={() => {
                    handleDeleteFromCart(id)
                }}>
                    delete
                </div>
            </div>
        </div>
    )
}
export default FunctionalCartLine;
