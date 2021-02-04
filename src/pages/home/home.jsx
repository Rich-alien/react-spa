import * as React from "react";
import ProductBanner from "../.././components/product-banner/product-banner";
import ProductSlider from "../.././components/product-slider/product-slider";
import SelectYear from "../.././components/select-year/select-year";
import style from "./home.module.css"

class Home extends React.Component {
    render() {
        return (
            <div className={style['home-container']}>
                {/*<Banner/> под редизайн!*/}
                <div className={style['home-viewer']}>
                    <ProductBanner/>
                    <ProductSlider/>
                </div>
                <SelectYear/>
            </div>
        )
    }
}

export default Home;
