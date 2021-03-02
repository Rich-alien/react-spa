import React, {useEffect} from "react";
import Products from "../../components/products/products";
import style from "./store.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../../store/product/product.slice";
import {selectLoading, selectProducts} from "../../store/product/product.slice";

const Store = ({addProductInCart}) => {
    const products = useSelector(selectProducts)
    const loading = useSelector(selectLoading) // тут типо над добавить условие для появления загрузки)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadProducts())
    },[dispatch])
    return (
        <div>
            {
                loading? <div style={{color:"white"}}>loading...</div> : <div className={style.container}>

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
            }

        </div>
    )
}
export default Store;
