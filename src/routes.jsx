'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
    <Route name='app' path='/' handler={require('./components/app.jsx')}>
        <DefaultRoute handler={require('./components/home-page.jsx')} />
        <NotFoundRoute handler={require('./components/404.jsx')} />
        <Route name='authors' handler={require('./components/authors/authors-page.jsx')}/>
        <Route name='about' handler={require('./components/about/about-page.jsx')}/>
        <Redirect from='about-us' to='about'/>
        <Redirect from='about/*' to='about'/>
    </Route>
);

module.exports = routes;
