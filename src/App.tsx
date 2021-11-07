import React from 'react';
import {Route, Routes} from "react-router-dom";
import './css/App.css';
import {CurrencyContainer} from './container/CurrencyContainer';
import CurrencyExchange from "./components/CurrencyExchange";
import CurrencyDesk from "./components/CurrencyDesk";

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <Routes>
                    <Route path={'/'} element={<CurrencyContainer UniversalComponent={CurrencyExchange}/>}/>
                    <Route path={'/desk'} element={<CurrencyContainer UniversalComponent={CurrencyDesk}/>}/>
                    <Route path={'/*'} element={
                        <h1 className="invalid-path">404 page not found</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
