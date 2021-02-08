import * as React from "react";
import style from './cart-line.module.css';
import ProductCounter from "../product-counter/product-counter";

class CartLine extends React.Component {
    render() {
        return (
            <div className={style.container}>
                {this.props.name}
                {this.props.price * this.props.count}
                <ProductCounter count={this.props.count}/>
            </div>
        )
    }
}

export default CartLine;
