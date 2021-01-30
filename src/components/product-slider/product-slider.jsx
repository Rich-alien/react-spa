import * as React from "react";
import style from "./product-slider.module.css"

class ProductSlider extends React.Component {
    render() {
        return (
            <div className={style.slider}>
                <div className={style.slider__top}>
                    <svg className={style.slider__top__svg} width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C43.9879 35.0407 35.0407 43.9879 24 44ZM24 8C15.2108 8.00223 8.06892 15.0937 8.00448 23.8827C7.94004 32.6717 14.9772 39.8671 23.7654 39.9982C32.5536 40.1293 39.8022 33.147 40 24.36V27.926V24C39.9901 15.1676 32.8324 8.00992 24 8ZM26.9 33.8L17 23.9L26.9 14L29.728 16.828L22.656 23.9L29.726 30.972L26.902 33.8H26.9Z"
                              fill="black"/>
                    </svg>
                    <img src="#" alt="название товара"/>
                    <svg className={style.slider__top__svg} width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path className={style.slider__top__svg}
                              d="M24 44C12.9593 43.9879 4.01212 35.0407 4 24V23.6C4.21986 12.6091 13.2692 3.85595 24.2613 4.0018C35.2535 4.14764 44.0674 13.1378 43.9956 24.1307C43.9237 35.1236 34.9931 43.9978 24 44ZM24 8.00004C15.1634 8.00004 8 15.1635 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C39.9901 15.1676 32.8324 8.00996 24 8.00004ZM21.1 34L18.272 31.17L25.342 24.1L18.272 17.03L21.1 14.2L31 24.1L21.102 34H21.1Z"
                              fill="black"/>
                    </svg>
                </div>
                <div >
                </div>
            </div>
        )
    }
}

export default ProductSlider;
