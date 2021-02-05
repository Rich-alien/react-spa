import * as React from "react";
import style from './shopping-cart.module.css';
class ShoppingCart extends React.Component {
    render() {
        return (
            <div className={style[this.props.hisActive?'container':'hide']}>
                обычная корзина
            </div>
        )
    }
}

export default ShoppingCart;
