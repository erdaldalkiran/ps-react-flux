'use strict';

var Dispatcher = require('../dispatcher/app-dispatcher.js');
var ActionTypes = require('./actionTypes');
var AuthorApi = require('../api/author-api.js');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            data: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitializeActions;