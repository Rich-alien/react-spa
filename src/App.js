import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/home";
import Store from "./pages/store/store";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Route, Switch} from "react-router-dom";
import News from "./pages/news/news";
import DescriptionProduct from "./components/description-product/description-product";
import LogInComponent from "./components/log-in/log-in.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";


const App = () => {
    const [indexCart, setIndexCart] = useState(null);
    const addNumber = (id)=>{
        debugger;
        if(id === indexCart){
            setIndexCart(`${id}`)
        }else{
            setIndexCart(id);
        }
    }
    return (
            <div className="App">
                <ScrollToTop/>
                <Header index={indexCart}/>
                <Switch>

                    <Route path='/store' exact render={() => <Store addProductInCart={addNumber}/>}/>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/news' exact render={() => <News/>}/>
                    <Route path="/products/:id">
                        <DescriptionProduct/>
                    </Route>
                    <Route exact path="/log-in">
                        <LogInComponent/>
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
