import React from "react";
import { Switch, Route } from 'react-router-dom';

// Import All Pages components
import Header from './components/menus/Header';
import App from './App'
// Domains
import {RegisterADomain, NewDomainExtension, NameSuggestionTool, WhoisLookup} from './pages/domains/index';
// Hosting
import {LinuxSharedHosting, WindowsSharedHosting, CloudHosting, DrupalHosting, JoomlaHosting, WordpressHosting} from './pages/hosting/index';
// VPS
import {LinuxVpsServer} from './pages/vps/index'
// Cloud
import {Cloud} from './pages/cloud/index'
// Error
import NotFound404 from './pages/NotFound404'
// 13232
function Routing() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />

                <Route exact path="/domains/register-a-domain" component={RegisterADomain} />
                <Route exact path="/domains/new-domain-extentions" component={NewDomainExtension} />
                <Route exact path="/domains/name-suggestion-tool" component={NameSuggestionTool} />
                <Route exact path="/domains/whois-lookup" component={WhoisLookup} />

                <Route exact path="/hosting/linux-shared-hosting" component={LinuxSharedHosting} />
                <Route exact path="/hosting/windows-shared-hosting" component={WindowsSharedHosting} />
                <Route exact path="/hosting/cloud-hosting" component={CloudHosting} />
                <Route exact path="/hosting/drupal-hosting" component={DrupalHosting} />
                <Route exact path="/hosting/joomla-hosting" component={JoomlaHosting} />
                <Route exact path="/hosting/wordpress-hosting" component={WordpressHosting} />

                <Route exact path="/vps/linux-vps-server" component={LinuxVpsServer} />

                <Route exact path="/cloud" component={Cloud} />



                <Route path="*" component={NotFound404} />
            </Switch>
        </>
    );
}

export default Routing;