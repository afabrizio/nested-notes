const {combineReducers} = require('redux');
const receiveInput = require('./receiveInput.js');
const executeToolbarCommand = require('./executeToolbarCommand.js');

const reducer = combineReducers(
  {
    receiveInput: receiveInput,
    executeToolbarCommand: executeToolbarCommand
  }
);

module.exports = reducer;
