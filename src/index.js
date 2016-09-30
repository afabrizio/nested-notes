const ReactDOM = require('react-dom');
const React = require('react');
const {Provider} = require('react-redux');
const store = require('./store.js');
const Notes = require('./notes.js');

document.addEventListener('click', function(event) {
  switch (event.target.className) {
    case 'user-input':
      event.target.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
          //Gather and store the line of text the user just input:
          let inputString = event.target.value;
          var line = {
            id: ['row', 'order', 'instance'],
            stringParts: inputString.split(' ')
          }
          store.dispatch({type: 'NEW_LINE_FROM_USER', payload: line});
        }
      });
      break;

    case 'console-state':
      console.log(store.getState());
    default:
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Notes />
  </Provider>,
  document.getElementById('notes')
);
