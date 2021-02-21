import React from "react";
import style from './cart-line.module.css';
import {useDispatch} from "react-redux";

const FunctionalCartLine = ({name, id, count, price}) => {

    const dispatch = useDispatch()

    const handleIncrement = (index) => {
        dispatch({
            type: 'incrementProduct',
            payload: {
                id: index
            }
        })
    }
    const handleDecrement = (index) => {
        dispatch({
            type: 'decrementProduct',
            payload: {
                id: index
            }
        })
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
            </div>
        </div>
    )
}
export default FunctionalCartLine;
