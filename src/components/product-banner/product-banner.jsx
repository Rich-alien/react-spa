import * as React from "react";
import style from "./product-banner.module.css"

class ProductBanner extends React.Component {
    render() {
        return (
            <div className={style.cell}>
                <div className={style['cell-product']}>
                    <img src="#" alt="картинка товара" className={style['cell-product__img']}/>
                    <p className={style['cell-product__name']}>Top100</p>
                </div>
                <div className={style['cell-product']}>
                    <img src="#" alt="картинка товара" className={style['cell-product__img']}/>
                    <p className={style['cell-product__name']}>Top100</p>
                </div>
                <div className={style['cell-product']}>
                    <img src="#" alt="картинка товара" className={style['cell-product__img']}/>
                    <p className={style['cell-product__name']}>Top100</p>
                </div>
                <div className={style['cell-product']}>
                    <img src="#" alt="картинка товара" className={style['cell-product__img']}/>
                    <p className={style['cell-product__name']}>Top100</p>
                </div>
            </div>
        )
    }
}

export default ProductBanner
