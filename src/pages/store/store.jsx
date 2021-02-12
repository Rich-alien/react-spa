import React, {useState, useEffect} from "react";

import Products from "../../components/products/products";
import style from "./store.module.css"
import {productsData} from "../../data/products.data"

const Store = ({addProductInCart}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productsData)
    }, [])
    return (
        <div>
            <div className={style.container}>
                {products.map((product, id) => (
                        <Products
                            addProductInCart={addProductInCart}
                            key={id}
                            name={product.name}
                            price={product.price}
                            id={id}
                        />
                    )
                )
                }
            </div>
        </div>
    )
}
export default Store;
