import React from 'react';
import './App.css';
import Home from "./pages/home/home";
import Store from "./pages/store/store";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./pages/news/news";


class App extends React.Component {
    state = {
        index: ''
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header index={this.state.index}/>
                    <Route path='/store' render={() => <Store addProductInCart={this.addProductInCart}/>}/>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }

    addProductInCart = (id) => {
        this.setState({
            index: id
        })
    }
}

export default App;
