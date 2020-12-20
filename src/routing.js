import React from "react";
import { Routes, Route } from 'react-router-dom';

// Import All Pages components
import Header from './components/menus/Header';
import App from './App'
import Home from './pages/home';
import NotFound404 from './pages/NotFound404.js'

function Routing() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </>
    );
}

export default Routing;