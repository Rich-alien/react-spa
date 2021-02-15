import React, {useMemo} from "react";
import style from "./description-product.module.css"
import {useParams} from "react-router-dom";
import {productsData} from "../../data/products.data";

const DescriptionProduct = () => {
    const {id} = useParams();
    const product = useMemo(() => productsData.find(p => p.id === +id), [id]);
    return (
        <div>
            <h1 className={style.text}>{product.name}</h1>
            <h1 className={style.text}>{product.price}</h1>
        </div>)

}
export default DescriptionProduct;
