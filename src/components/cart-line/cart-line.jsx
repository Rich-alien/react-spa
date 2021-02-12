import React, {useEffect, useState} from "react";
import style from './cart-line.module.css';

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

const FunctionalCartLine = ({name, price, count}) => {
    const {
        value,
        setValue,
        increment,
        decrement
    } = useCounter()

    useEffect(() => {
        setValue(count)
    }, [count, setValue])

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
        </div>
    )
}
export default FunctionalCartLine;
