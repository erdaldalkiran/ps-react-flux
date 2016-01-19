'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>
                    It seems you lost your  way in our beautiful app!!
                </p>
                <p>
                    <Link to='app'>Return where you started</Link>
                </p>
            </div>
        );
    }
});

module.exports = NotFound;