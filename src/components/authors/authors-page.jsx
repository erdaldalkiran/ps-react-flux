'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorStore = require('../../stores/author-store');
var AuthorList = require('./author-list.jsx');

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function () {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            authors: AuthorStore.getAllAuthors()
        });
    },
    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to='create-author' className='btn btn-default'>Create Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;