import React, {useEffect, useState} from "react";
import style from './cart-line.module.css';
import {useDispatch} from "react-redux";

const useCounter = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1);
    };
    const decrement = () => {
        setValue(value - 1);
    };

    return {
        value,
        setValue,
        increment,
        decrement
    }
}

const FunctionalCartLine = ({name, price, count,id}) => {
    const {
        value,
        setValue,
        increment,
        decrement
    } = useCounter()

    useEffect(() => {
        setValue(count)
    }, [count, setValue])
    const dispatch = useDispatch()
    const deleteProduct = (index) => {
        dispatch({
            type: 'deleteFromCart',
            payload: {
                id: index,
            }
        })
    }

    return (
        <div className={style.container}>
            {name}
            {price * value}
            <div>
                <div onClick={increment}> +</div>
                <div className={style.counter}>
                    {value}
                </div>
                <div onClick={decrement}>-</div>
            </div>
            {/*<button onClick={() => {*/}
            {/*    deleteProduct(id)*/}
            {/*}}>delete*/}
            {/*</button>*/}

        </div>
    )
}
export default FunctionalCartLine;
