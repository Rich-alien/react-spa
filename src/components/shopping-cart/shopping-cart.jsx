import * as React from "react";
import style from './shopping-cart.module.css';
import {products} from "../../data/products.data"
// import CartLine from "../cart-line/cart-line";
import FunctionalCartLine from "../cart-line/cart-line";

let cart = [];
let cartCount = 0;

class ShoppingCart extends React.Component {
    state = {}
    componentDidUpdate(prevProps, prevState) {
        if (this.props.index !== null && this.props.index !== '') {
            console.log(this.props.index)
            this.renderProductInCart()
        }
    }
    renderProductInCart = () => {
        const {index} = this.props;
        if (cartCount === 0) {
            cartCount++;
            this.addProductToCart(index);
        } else {
            if (this.hasCollision(index)) {
                cartCount++;
                this.addProductToCart(index);
            } else {
                cart.forEach(item => {
                    if (item.id === index) {
                        item.count++;
                    }
                });
            }
        }

    }
    addProductToCart(id) {
        cart.push(products[id]);
    }
    hasCollision(id) {
        let HasId = true;
        cart.forEach(item => {
            if (item.id === id) {
                HasId = false;
            }
        });
        return HasId;
    }
    render() {
        return (
            <div className={style[this.props.hisActive ? 'container' : 'hide']}>
                {
                    cart.map((item, index) => (<FunctionalCartLine
                        key={index}
                        name={item.name}
                        price={item.price}
                        count={item.count}
                        />))
                }
                <button onClick={this.props.closeCart}>
                    back
                </button>
            </div>
        )
    }
}

export default ShoppingCart;
