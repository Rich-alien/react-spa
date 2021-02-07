import * as React from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";
class Products extends React.Component {
    state = {
        onLeadProduct: false,
    }

    render() {
        return (
            <div
                onMouseOver={this.showButton}
                onMouseLeave={this.hideButton}
                className={style['product-container']}>
                <img className={style[this.state.onLeadProduct ?
                    'product-image__blur' :
                    'product-image']}
                     src={productTemplate}
                     alt="img product"/>
                <div className={style['product-name']}>{this.props.name}</div>
                <div className={style['product-price']}>{this.props.price}руб.</div>
                <button onClick={()=>{
                        this.props.addProductInCart(this.props.id)
                    }}
                    className={style[this.state.onLeadProduct ?
                        'product-button__show' :
                        'product-button__hidden']}>
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
    hideButton = () => {
        this.setState({
            ...this.state,
            onLeadProduct: false
        })
    }

}


export default Products;
