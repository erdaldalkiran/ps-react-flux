'use strict';

var React = require('react');
var TextInput = require('../common/text-input.jsx');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function(){
        return (
            <form>
                <TextInput 
                    name='firstName'
                    label='First Name'
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                    value = {this.props.author.firstName}
                    placeholder='First Name' />
                    
                <TextInput 
                    name='lastName'
                    label='Last Name'
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                    value = {this.props.author.lastName}
                    placeholder='Last Name' />
                    
                 <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave}/>
            </form>
        );
    }    
});

module.exports = AuthorForm;