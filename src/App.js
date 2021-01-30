import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Banner from "./components/baner/banner";
import ProductBanner from "./components/product-banner/product-banner";
import ProductSlider from "./components/product-slider/product-slider";
import Footer from "./components/footer/footer";
import SelectYear from "./components/select-year/select-year";


const App = () => {
    return (
        <div className="App">
            <div className="header">
                <Header/>
                <Banner/>
            </div>
            <div className="main-container">
                <ProductBanner/>
                <ProductSlider/>
            </div>
            <SelectYear/>
            <Footer/>
        </div>
    );
}

export default App;
