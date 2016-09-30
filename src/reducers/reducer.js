const {combineReducers} = require('redux');
const receiveLine = require('./receiveLine.js');

const reducer = combineReducers(
  {
    receiveLine: receiveLine
  }
);

module.exports = reducer;
