import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/home";
import Store from "./pages/store/store";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./pages/news/news";


const App = () => {
    const [indexCart, setIndexCart] = useState(0);
    return (
        <BrowserRouter>
            <div className="App">
                <Header index={indexCart}/>
                <Route path='/store' exact render={() => <Store addProductInCart={setIndexCart}/>}/>
                <Route path='/home' exact render={() => <Home/>}/>
                <Route path='/news' exact render={() => <News/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default App;
