'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorApi = require('../../api/author-api');
var AuthorList = require('./author-list.jsx');

var AuthorPage = React.createClass({
    getInitialState: function(){
      return {
        authors: []  
      };
    },
    componentDidMount: function(){
        if(this.isMounted){
            this.setState({
                authors: AuthorApi.getAllAuthors()
            });
        }
    },
    render: function(){ 
        return (
            <div>
                <h1>Authors</h1>
                <Link to='create-author' className='btn btn-default'>Create Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;