const {combineReducers} = require('redux');
const receiveInput = require('./receiveInput.js');

const reducer = combineReducers(
  {
    receiveInput: receiveInput
  }
);

module.exports = reducer;
