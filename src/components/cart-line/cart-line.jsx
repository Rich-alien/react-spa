import React from "react";
import style from './cart-line.module.css';
import {useDispatch} from "react-redux";

const FunctionalCartLine = ({name, index}) => {

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
            {/*{price * value}*/}
            <div>
                <div onClick={() => {
                    handleIncrement(index)
                }}> +
                </div>
                <div className={style.counter}>
                    {/*{value}*/}
                </div>
                <div onClick={() => {
                    handleDecrement(index)
                }}>-
                </div>
            </div>
        </div>
    )
}
export default FunctionalCartLine;
