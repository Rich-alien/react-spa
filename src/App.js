import React from 'react';
import './App.css';
import Home from "./pages/home/home";
import Store from "./pages/store/store";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./pages/news/news";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                    <Route path='/store' render={() => <Store/>}/>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/news' render={() => <News/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
