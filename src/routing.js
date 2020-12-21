import React from "react";
import { Switch, Route } from 'react-router-dom';

// Import All Pages components
import Header from './components/menus/Header';
import App from './App'
import Home from './pages/home';
import NotFound404 from './pages/NotFound404.js'

function Routing() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home} />
                <Route path="*" component={NotFound404} />
            </Switch>
        </>
    );
}

export default Routing;