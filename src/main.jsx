$ = jQuery = require('jquery');

(function () {
    'use strict';

    var React = require('react');
    var Home = require('./components/home-page.jsx');
    var About = require('./components/about/about-page.jsx');
    var Authors = require('./components/authors/authors-page.jsx');
    var Header = require('./components/common/header.jsx');

    var App = React.createClass({
        render: function () {
            var Child;

            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                case 'authors':
                    Child = Authors;
                    break;
                default:
                    Child = Home;
                    break;
            }

            return (
                    <div>
                        <Header/>
                        <Child/>
                    < /div>
                );
        }
    });

    function render() {
        var route = window.location.hash.substr(1);
        React.render(<App route={ route } />, document.getElementById('app'));
    }

    window.addEventListener('hashchange', render);

    render();
})();