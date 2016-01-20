/* jshint strict: false */

$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var InitializeActions = require('./actions/initialize-actions');

InitializeActions.initApp();

Router.run(routes, Router.HistoryLocation, function(Handler){
    'use strict';
    
    React.render(<Handler/>, document.getElementById('app'));
});
