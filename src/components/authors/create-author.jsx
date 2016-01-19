'use strict';

var React = require('react');
var Router = require('react-router');
var Toastr = require('toastr');
var AuthorForm = require('./author-form.jsx');
var AuthorApi = require('../../api/author-api.js');

var ManageAuthor = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.isDirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },
    getInitialState: function(){
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {},
            isDirty: false
        };
    },
    componentWillMount: function(){
        var authorId = this.props.params.id;
        
        if(authorId){
            this.setState({
                author: AuthorApi.getAuthorById(authorId)
            });
        }
    },
    setAuthorState: function(event){
        this.setState({
            isDirty: true
        });
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        this.setState({
            author: this.state.author
        });
    },
    isAuthorFormValid: function (){
        this.state.errors = {};
        
        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 characters.';
        }
        
        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
        }
        
        this.setState({errors: this.state.errors});
        
        console.log(Object.keys(this.state.errors));
        return Object.keys(this.state.errors).length === 0;
    },
    saveAuthor: function(event){
        event.preventDefault();
        
        if(!this.isAuthorFormValid()){
            return;
        }
        
        AuthorApi.saveAuthor(this.state.author);
        this.setState({
            isDirty: false
        });
        Toastr.success('Author saved.'); 
        setTimeout(
            function(){ 
                this.transitionTo('authors');
            }.bind(this), //EC6 you may use arrow functions
            0);
        
    },
    render: function() {
        return (
            <div>
                <h1> Manage Author </h1>
                <AuthorForm 
                    author={this.state.author}
                    errors = {this.state.errors} 
                    onChange={this.setAuthorState} 
                    onSave={this.saveAuthor} />
            </div>
        );
    }  
});

module.exports = ManageAuthor;