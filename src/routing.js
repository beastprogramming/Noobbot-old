import React from "react";
import { Switch,Redirect, Route } from 'react-router-dom';

// Import All Pages components
import Header from './components/menus/Header';
import App from './App'
// Domains
import RegisterDomain from './pages/domains/RegisterADomain';
import NewDomainExt from './pages/domains/NewDomainExtension';
import NameSuggestionTool from './pages/domains/NameSuggestionTool';
import WhoisLookup from './pages/domains/WhoIsLookup';
// Error
import NotFound404 from './pages/NotFound404'

function Routing() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />

                <Route exact path="/domains/register-a-domain" component={RegisterDomain} />
                <Route exact path="/domains/new-domain-extentions" component={NewDomainExt} />
                <Route exact path="/domains/name-suggestion-tool" component={NameSuggestionTool} />
                <Route exact path="/domains/whois-lookup" component={WhoisLookup} />

                <Route path="*" component={NotFound404} />
            </Switch>
        </>
    );
}

export default Routing;