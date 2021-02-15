import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/home";
import Store from "./pages/store/store";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import News from "./pages/news/news";
import DescriptionProduct from "./components/description-product/description-product";


const App = () => {
    const [indexCart, setIndexCart] = useState(null);

    // const location = useLocation()
    // const params = new URLSearchParams(location.search);
    // const q=params.get("q")
    // console.log(q);

    return (
            <div className="App">
                <Header index={indexCart}/>

                <Switch>
                    <Route path='/store' exact render={() => <Store addProductInCart={setIndexCart}/>}/>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/news' exact render={() => <News/>}/>
                    <Route path="/products/:id">
                        <DescriptionProduct/>
                    </Route>
                    <Route>
                        <h1 style={{color: 'white'}}>Error</h1>
                    </Route>
                </Switch>
                <Footer/>
            </div>
    )
}
export default App;
