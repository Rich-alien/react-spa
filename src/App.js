import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/home";
import Store from "./pages/store/store";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Route, Switch} from "react-router-dom";
import News from "./pages/news/news";
import DescriptionProduct from "./components/description-product/description-product";
import {useQueryParams} from "./hooks/use-query-params.hook";


const App = () => {
    const [indexCart, setIndexCart] = useState(null);

    const params = useQueryParams();
    console.log(params.get);
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
