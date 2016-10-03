const ReactDOM = require('react-dom');
const React = require('react');
const {Provider} = require('react-redux');
const store = require('./store.js');
const Notes = require('./notes.js');
const Tools = require('./tools.js');

document.addEventListener('click', function(event) {
  switch (event.target.className) {
    case 'console-state':
      console.log(store.getState());
    default:
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Notes />
  </Provider>,
  document.getElementById('user-notes')
);

ReactDOM.render(
  <Provider store={store}>
    <Tools />
  </Provider>,
  document.getElementById('tools')
);
