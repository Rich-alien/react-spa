import * as React from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";

class Products extends React.Component {
    state = {
        onLeadProduct: false
    }

    render() {
        return (
            <div onMouseOver={this.showButton} onMouseLeave={this.hideButton} className={style['product-container']}>
                <img className={style['product-image']} src={productTemplate} alt="img product"/>
                <div className={style['product-name']}>{this.props.name}</div>
                <div className={style['product-price']}>{this.props.price}</div>
                <button className={this.state.onLeadProduct ? style['product-button__show'] : style['product-button__hidden']}>
                    добавить в корзину
                </button>
            </div>
        )
    }

    showButton = () => {
        this.setState({
            ...this.state,
            onLeadProduct: true
        })
    }
    hideButton = () =>{
        this.setState({
            ...this.state,
            onLeadProduct: false
        })
    }
}


export default Products;
