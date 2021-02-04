import * as React from "react";
import style from "./products.module.css"
import productTemplate from "../.././img/product.jpg";

class Products extends React.Component {
    render() {
        return (
            <div className={style['product-container']}>
                <img className={style['product-image']} src={productTemplate} alt="img product"/>
                <div className={style['product-name']}>{this.props.name}</div>
                <div className={style['product-price']}>{this.props.price}</div>
            </div>
        )
    }
}

export default Products;
